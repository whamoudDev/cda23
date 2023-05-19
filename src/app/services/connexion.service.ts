import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConnexionService {
  public _utilisateurConnecte: BehaviorSubject<Utilisateur | null> =
    new BehaviorSubject<Utilisateur | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.updateUserConnected();
  }

  connexion(utilisateur: Utilisateur): Observable<string> {
    return this.http.post(environment.serverUrl + '/connexion', utilisateur, {
      responseType: 'text',
    });
  }

  updateUserConnected() {
    const jwt = localStorage.getItem('jwt');
    if (jwt != null) {
      const data = jwt.split('.')[1];
      const json = window.atob(data);
      const donneesUtilisateur = JSON.parse(json);

      //ROLE_USER, ROLE_ADMIN
      const listeRole = donneesUtilisateur.roles
      .split(',')
      .filter((role: string)=> role != "")
      .map((nomRole : string) => {
        return {nom: nomRole};
      });

      const utilisateur: Utilisateur = {
        email: donneesUtilisateur.sub,
        nom: donneesUtilisateur.nom,
        prenom: donneesUtilisateur.prenom,
        roles: listeRole,
      };

      this._utilisateurConnecte.next(utilisateur);
    } else {
      this._utilisateurConnecte.next(null);
    }
  }

  deconnexion() {
    localStorage.removeItem('jwt');
    this._utilisateurConnecte.next(null);
    this.router.navigateByUrl('/connexion');
  }
}

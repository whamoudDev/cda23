import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { IsAdminPipe } from 'src/app/pipes/is-admin.pipe';
import { ConnexionService } from 'src/app/services/connexion.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  isAdmin: boolean = false;
  listeUtilisateur: Utilisateur[] = [];
  dateMaintenant: Date = new Date();

  constructor(
    private serviceUtilisateur: UtilisateurService,
    private connexionService: ConnexionService,
  ) {}

  ngOnInit() {
    
    this.serviceUtilisateur._utilisateurs.subscribe(
      (utilisateurs) => (this.listeUtilisateur = utilisateurs)
    );
    this.connexionService._utilisateurConnecte.subscribe(
      (utilisateur) => 
      (this.isAdmin = 
        utilisateur != null 
        ? new IsAdminPipe().transform(utilisateur) 
        : false)
    );

    this.rafraichir();
  }

  rafraichir(): void {
    this.serviceUtilisateur.getUtilisateurs();
  }
  onDeleteUser(idUtilisateur: number | undefined) {
    if (idUtilisateur != undefined) {
      this.serviceUtilisateur
        .deleteUtilisateur(idUtilisateur)
        .subscribe((utilisateur) => this.rafraichir());
    }
  }
}

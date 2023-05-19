import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from '../services/connexion.service';
import { IsAdminPipe } from '../pipes/is-admin.pipe';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private connexionService: ConnexionService,
    private router: Router,
    private isAdmin: IsAdminPipe
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.connexionService._utilisateurConnecte.value != null && 
      new IsAdminPipe().transform(this.connexionService._utilisateurConnecte.value)
     ) {
      return true;
    }
    return this.router.parseUrl('/droits-insuffisants');
  }
}

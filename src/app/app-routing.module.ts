import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditionUtilisateurComponent } from './pages/edition-utilisateur/edition-utilisateur.component';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';
import { Page403Component } from './pages/page403/page403.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent, canActivate: [UserGuard] },
  { path: 'connexion', component: ConnexionComponent },
  {
    path: 'ajout-utilisateur',
    component: EditionUtilisateurComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'edit-utilisateur/:id',
    component: EditionUtilisateurComponent,
    canActivate: [AdminGuard],
  },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path: "droits-insuffisants", component: Page403Component},
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

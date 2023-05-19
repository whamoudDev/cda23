import { Pipe, PipeTransform } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';

@Pipe({
  name: 'isAdmin'
})
export class IsAdminPipe implements PipeTransform {

  transform(utilisateur: Utilisateur): boolean {
    
    const listeNomRoles = utilisateur.roles.map(role=> role.nom);

    return (
      listeNomRoles.indexOf('ROLE_ADMIN') != -1 ||
      listeNomRoles.indexOf('ROLE_SUPERADMIN') != -1
    );

  }

}

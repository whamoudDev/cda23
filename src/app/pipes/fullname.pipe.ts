import { Pipe, PipeTransform } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(utilisateur: Utilisateur, ...args: string[]): string {
    return utilisateur.nom.toUpperCase() + ' ' + utilisateur.prenom;
  }
}

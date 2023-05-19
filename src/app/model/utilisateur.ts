import { Pays } from './pays';
import { Role } from './role';

export interface Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  roles: Role[];
  pays?: Pays;
  createdAt?: Date;
  updateAt?: Date;
  nomImageProfil?: string;
  imageProfil?: any;
}

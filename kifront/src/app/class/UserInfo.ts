import { User } from './User';
import { TeamRole } from './TeamRole';
export class UserInfo {
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    admin: boolean;
    active: boolean;
    bornDate: Object;
    jobName: string;
    createdAt: Object;
    avatar: File;
    pilote = false;
    // equipes_old: object;

}

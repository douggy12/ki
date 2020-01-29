import { DateJson } from './DateJson';
import { User } from './User';
import { TeamRole } from './TeamRole';
export class UserInfo {
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    admin: boolean;
    active: boolean;
    bornDate: DateJson;
    jobName: string;
    createdAt: DateJson;
    avatar: File;
    pilote = false;
    agence: string;
    loaded: boolean;
    // equipes_old: object;

}

import { TeamRole } from './TeamRole';
export class User {
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    admin: boolean;
    active: boolean;
    bornDate: Date;
    jobName: string;
    equipes_role: Array<TeamRole>;
}

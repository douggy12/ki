import { User } from './User';
export class Team {
    id: number;
    name: string;
    createdAt: Object;
    pilote: User;
    users: Array<User>;
    description: string;

}


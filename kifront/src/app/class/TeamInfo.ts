import { DateJson } from './DateJson';
import { UserInfo } from './UserInfo';
import { User } from './User';
export class TeamInfo {
    id: number;
    name: string;
    createdAt: DateJson;
    pilote: UserInfo;
    agence: string;

}


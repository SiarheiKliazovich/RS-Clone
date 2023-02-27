import { IUser } from "./user";

export interface IUsersListComponent {
  users: IUser[];
  activeButton: string;
}

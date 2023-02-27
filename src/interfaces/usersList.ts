import { IUser } from "./user";

export interface IUsersList {
  users: IUser[];
  usersLoadingStatus: string;
}

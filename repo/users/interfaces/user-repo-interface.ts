import { IUser } from '../../../models/userModel/user-model';  // Adjust the path if needed

export interface IUserRepo {
  getAllUsers(): IUser[];
  addNewUser(user: IUser): IUser;
  getUserById(id: string): IUser | undefined;
}
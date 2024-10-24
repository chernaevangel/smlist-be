import { IUser } from '../../../models/userModel/user-model';  // Adjust the path if needed

export interface IUserRepo {
  getAllUsers(): Promise<IUser[]>;
  addNewUser(user: IUser): Promise<IUser>;
  getUserById(id: string): Promise<IUser | undefined>;
}
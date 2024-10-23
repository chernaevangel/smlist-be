// src/data/users.ts
import { IUser } from '../../models/userModel/user-model';
import { users } from './users';
import { IUserRepo } from './interfaces/user-repo-interface';

export class UserRepo implements IUserRepo {
  getAllUsers(): IUser[] {
    return users;
  }

  addNewUser(user: IUser): IUser {
    users.push(user);
    return user;
  }

  getUserById(id: string): IUser | undefined {
    return users.find(user => user.id === id);
  }
}
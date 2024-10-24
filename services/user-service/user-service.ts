// src/services/userService.ts
import { IUser } from '../../models/userModel/user-model';  
import { UserRepoDB } from '../../repo/users/user-repo-db';  
import { IUserRepo } from '../../repo/users/interfaces/user-repo-interface';

export class UserService {
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  async getAllUsers(): Promise<IUser[]> {
    const users: IUser[] = await this.userRepo.getAllUsers();
    return users;
  }

  async addNewUser(user: IUser): Promise<IUser> {
    const newUser = await this.userRepo.addNewUser(user);
    return newUser;
  }

  async getUserById(id: string): Promise<IUser | undefined> {
    const user = await this.userRepo.getUserById(id);
    return user;
  }

}

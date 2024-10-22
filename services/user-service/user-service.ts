// src/services/userService.ts
import { IUser } from '../../models/userModel/user-model';  
import { UserRepo } from '../../repo/users/user-repo';  

export class UserService {
  private userRepo: UserRepo;

  constructor() {
    this.userRepo = new UserRepo();
  }

  getAllUsers(): IUser[] {
    return this.userRepo.getAllUsers();
  }

  addNewUser(user: IUser): IUser {
    return this.userRepo.addNewUser(user);
  }

  getUserById(id: string): IUser | undefined {
    return this.userRepo.getUserById(id);
  }

}

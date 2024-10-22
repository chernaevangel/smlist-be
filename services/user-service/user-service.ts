// src/services/userService.ts
import { users } from '../../repo/users/user-repo';  // Using 'import' for consistency
import { IUser } from '../../models/userModel/user-model';  // Ensure you're importing IUser correctly
import { IUserRepo } from '../../repo/users/interfaces/user-repo-interface';  // Ensure you're importing IUserRepo correctly

export class UserService implements IUserRepo {
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

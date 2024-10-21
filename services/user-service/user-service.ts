// src/services/userService.ts
import { users } from '../../repo/user-repo';  // Using 'import' for consistency
import { IUser } from '../../models/userModel/user-model';  // Ensure you're importing IUser correctly

export class UserService {
  static getAllUsers(): IUser[] {
    return users;
  }

  static getUserById(id: string): IUser | undefined {
    return users.find(user => user.id === id);
  }
}

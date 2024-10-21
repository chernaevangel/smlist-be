// src/services/userService.test.ts
import { UserService } from './user-service';
import { users } from '../../repo/user-repo'; 
import { IUser } from '../../models/userModel/user-model';

describe('UserService', () => {
  beforeEach(() => {
    while (users.length > 0) {
      users.pop();
    }
  });

  test('getAllUsers should return an empty array initially', () => {
    const result = UserService.getAllUsers();
    expect(result).toEqual([]); 
  });

  test('getAllUsers should return all users after adding new ones', () => {
    const newUser: IUser = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'admin',
    };

    UserService.addNewUser(newUser);
    
    const result = UserService.getAllUsers();
    expect(result).toHaveLength(1);
    expect(result).toContainEqual(newUser); 
  });

  test('addNewUser should add a new user', () => {
    const newUser: IUser = {
        id: '2',
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
        role: 'user',
    };

    const addedUser = UserService.addNewUser(newUser);
    
    expect(addedUser).toEqual(newUser);  
    expect(users).toContainEqual(newUser); 
  });

  test('getUserById should return undefined for non-existing user', () => {
    const result = UserService.getUserById('non-existing-id');
    expect(result).toBeUndefined(); 
  });

  test('getUserById should return the correct user for an existing user', () => {
    const newUser: IUser = {
      id: '3',
      name: 'Sam Smith',
      email: 'sam@example.com',
      password: 'password123',
      role: 'user',
    };

    UserService.addNewUser(newUser);
    const result = UserService.getUserById('3');
    
    expect(result).toEqual(newUser);  
  });
});

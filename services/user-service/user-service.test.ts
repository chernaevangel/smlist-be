// src/services/userService.test.ts
import { UserService } from './user-service';
import { users } from '../../repo/users/user-repo'; 
import { IUser } from '../../models/userModel/user-model';

describe('UserService', () => {

  const userService = new UserService();

  beforeEach(() => {
    while (users.length > 0) {
      users.pop();
    }
  });

  test('getAllUsers should return an empty array initially', () => {
    const result = userService.getAllUsers();
    expect(result).toEqual([]); 
  });

  test('getAllUsers should return all users after adding new ones', () => {
    const newUser: IUser = {
        id: '1',
        username: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'admin',
        familyId: '1',
    };

    userService.addNewUser(newUser);
    
    const result = userService.getAllUsers();
    expect(result).toHaveLength(1);
    expect(result).toContainEqual(newUser); 
  });

  test('addNewUser should add a new user', () => {
    const newUser: IUser = {
        id: '2',
        username: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
        role: 'user',
        familyId: '1',
    };

    const addedUser = userService.addNewUser(newUser);
    
    expect(addedUser).toEqual(newUser);  
    expect(users).toContainEqual(newUser); 
  });

  test('getUserById should return undefined for non-existing user', () => {
    const result = userService.getUserById('non-existing-id');
    expect(result).toBeUndefined(); 
  });

  test('getUserById should return the correct user for an existing user', () => {
    const newUser: IUser = {
      id: '3',
      username: 'Sam Smith',
      email: 'sam@example.com',
      password: 'password123',
      role: 'user',
      familyId: '1',
    };

    userService.addNewUser(newUser);
    const result = userService.getUserById('3');
    
    expect(result).toEqual(newUser);  
  });
});

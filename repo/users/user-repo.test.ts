// src/services/userService.test.ts
import { UserRepo } from '../../repo/users/user-repo';
import { users } from '../../repo/users/users'; 
import { IUser } from '../../models/userModel/user-model';

describe('UserService', () => {

  const userRepo = new UserRepo();

  beforeEach(() => {
    while (users.length > 0) {
      users.pop();
    }
  });

  test('getAllUsers should return an empty array initially', () => {
    const result = userRepo.getAllUsers();
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

    userRepo.addNewUser(newUser);
    
    const result = userRepo.getAllUsers();
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

    const addedUser = userRepo.addNewUser(newUser);
    
    expect(addedUser).toEqual(newUser);  
    expect(users).toContainEqual(newUser); 
  });

  test('getUserById should return undefined for non-existing user', () => {
    const result = userRepo.getUserById('non-existing-id');
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

    userRepo.addNewUser(newUser);
    const result = userRepo.getUserById('3');
    
    expect(result).toEqual(newUser);  
  });
});

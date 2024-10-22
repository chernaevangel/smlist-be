// src/data/users.ts
import { IUser } from '../../models/userModel/user-model';

export const users: IUser[] = [
  {
    id: '1',
    username: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // In a real scenario, this should be hashed
    role: 'admin',
    familyId: '1',
  },
  {
    id: '2',
    username: 'Jane Doe',
    email: 'jane@example.com',
    password: 'password123',
    role: 'user',
    familyId: '1',
  },
];

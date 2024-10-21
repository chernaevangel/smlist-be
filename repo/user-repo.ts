// src/data/users.ts
import { IUser } from '../models/userModel/user-model';

export const users: IUser[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // In a real scenario, this should be hashed
    role: 'admin',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: 'password123',
    role: 'user',
  },
];

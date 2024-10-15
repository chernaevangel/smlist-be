// src/services/userService.ts
import { getUserData } from '../data/userData';

export const getUser = async (id: string) => {
  return await getUserData(id);
};

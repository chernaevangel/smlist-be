// src/controllers/userController.ts
import { Request, Response } from 'express';
import { getUser } from '../services/userService';

export const getUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get user' });
  }
};

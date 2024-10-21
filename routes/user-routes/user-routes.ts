// src/routes/userRoutes.ts
import { NextFunction, Request, Response, Router } from 'express';
import { UserService } from '../../services/user-service/user-service';
import { IUser } from '../../models/userModel/user-model';

const router = Router();

router.get('/users', (req, res) => {
  const allUsers = UserService.getAllUsers();
  res.json(allUsers);
});

router.get('/users/:id', (req, res) => {
  const user = UserService.getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.post('/users', (req, res) => {
  const passedUser: IUser = req.body;  
  const newUser = UserService.addNewUser(passedUser);
  res.status(201).json(newUser);
});

module.exports = router;
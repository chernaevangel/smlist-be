// src/routes/userRoutes.ts
import { NextFunction, Request, Response, Router } from 'express';
import { UserService } from '../../services/user-service/user-service';

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

module.exports = router;
import { NextFunction, Request, Response, Router } from 'express';
import { UserService } from '../../services/user-service/user-service';
import { IUser } from '../../models/userModel/user-model';
import { validateUser } from './user-validation';

const router = Router();
const userService = new UserService();

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = userService.getAllUsers();
    res.json(allUsers);
  } catch (error) {
    next(error); 
  }
});

router.get('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = userService.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    next(error); 
  }
});

router.post('/users', (req: Request, res: Response, next: NextFunction) => {
  try {

    if (!validateUser(req.body)) {
      return res.status(400).json({ 
        error: 'Invalid user data!' 
      });
    }

    const passedUser: IUser = req.body; 

    const newUser = userService.addNewUser(passedUser);
    res.status(201).json(newUser);
  } catch (error) {
    next(error); 
  }
});

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = router;

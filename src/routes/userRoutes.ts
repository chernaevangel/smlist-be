// src/routes/userRoutes.ts
import { Router } from 'express';
import { getUserController } from '../controllers/userController';

const router = Router();

router.get('/user/:id', getUserController);

export default router;
import { Router } from 'express';
import {
  getUser,
  getUsers,
  newUser,
  updateUser,
} from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', newUser);
router.patch('/users/:id', updateUser);

export default router;

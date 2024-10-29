// src/routes/userRoutes.ts
import { Hono } from 'hono';
import * as userController from '../controllers/userControllers';

const userRoutes = new Hono();

userRoutes.post('/', userController.createUser);
userRoutes.get('/', userController.getAllUsers);
userRoutes.get('/:id', userController.getUserById);
userRoutes.put('/:id', userController.updateUser);
userRoutes.delete('/:id', userController.deleteUser);

export default userRoutes;

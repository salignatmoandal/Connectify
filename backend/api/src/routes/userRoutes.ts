import { Hono } from 'hono';
import { createUser, getUserById, getAllUsers, updateUser, deleteUser } from '../controllers/userControllers';
import authMiddleware from '../middlewares/authMiddleware';

const userRoutes = new Hono();

// Route publique pour créer un utilisateur
userRoutes.post('/', createUser);

// Route publique pour obtenir tous les utilisateurs
userRoutes.get('/', getAllUsers);

// Route protégée : obtenir un utilisateur par ID
userRoutes.get('/:id', authMiddleware, getUserById);

// Route protégée : mettre à jour un utilisateur par ID
userRoutes.put('/:id', authMiddleware, updateUser);

// Route protégée : supprimer un utilisateur par ID
userRoutes.delete('/:id', authMiddleware, deleteUser);

export default userRoutes;

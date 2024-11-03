import { Hono } from 'hono';
import { createUser, getUserById, getAllUsers, updateUser, deleteUser } from '../controllers/userControllers';
import authMiddleware from '../middlewares/authMiddleware';

const app = new Hono();

// Route publique pour créer un utilisateur
app.post('/users', createUser);

// Route publique pour obtenir tous les utilisateurs
app.get('/users', getAllUsers);

// Route protégée : obtenir un utilisateur par ID
app.get('/users/:id', authMiddleware, getUserById);

// Route protégée : mettre à jour un utilisateur par ID
app.put('/users/:id', authMiddleware, updateUser);

// Route protégée : supprimer un utilisateur par ID
app.delete('/users/:id', authMiddleware, deleteUser);

export default app;

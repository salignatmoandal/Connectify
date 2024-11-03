import type { Context, Next } from 'hono'; //
import jwt from 'jsonwebtoken';


// Étendre HonoRequest pour ajouter la propriété `user`
declare module 'hono' {
    interface HonoRequest {
      user?: { userId: string };
    }
  }


const JWT_SECRET = process.env.JWT_SECRET || 'https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; // Votre clé secrète pour signer les tokens

export default async (c: Context, next: Next) => {
  const authHeader = c.req.header('Authorization'); // Récupération de l'en-tête Authorization
  if (!authHeader) {
    return c.json({ message: 'Token manquant' }, 401); // Pas de token fourni
  }

  const token = authHeader.split(' ')[1]; // Extraction du token
  if (!token) {
    return c.json({ message: 'Token invalide' }, 401); // Token invalide
  }

  try {
    // Vérification du token
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload; // Vérification et décodage du token
    c.req.user = { userId: decoded.userId }; // Ajout de l'ID utilisateur au contexte de la requête
    await next(); // Passe à la prochaine étape (route)
  } catch (error) {
    return c.json({ message: 'Token non valide' }, 401); // Token invalide
  }
};
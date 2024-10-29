import { type Context } from "hono";
import * as userService from "../services/userServices";

// Utilisation des contrôleurs pour les utilisateurs

export const createUser = async (c: Context) => {
  const data = await c.req.json();
  const user = await userService.createUser(data);
  return c.json(user, 201);
};

// Logique de métiers pour GetUserById
export const getUserById = async (c: Context) => {
  const { id } = c.req.param();
  const user = await userService.getUserById(id);
  if (!user)
    return c.json(
      {
        error: "User not found",
      },
      404
    );
};

// Logique de métiers pour GetAllUser
export const getAllUsers = async (c: Context) => {
  const users = await userService.getAllUsers();

  return c.json(users);
};

// Logique de métier pour updateUser
export const updateUser = async (c: Context) => {
  const { id } = c.req.param();
  const data = await c.req.json();
  const user = await userService.updateUser(id, data);
  return c.json(user);
};

export const deleteUser = async (c: Context) => {
  const { id } = c.req.param();
  await userService.deleteUser(id);
  return c.json(null, 204);
};

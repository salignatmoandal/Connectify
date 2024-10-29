import { PrismaClient } from "@prisma/client";

// Initailisation de prisma client 
const prisma = new PrismaClient();


// Créer un utilisateur
export async function createUser(data: { name: string; email: string; password: string }) {
    return await prisma.user.create({ data });
  }

// Récupération d'un utilisateur par ID 
export async function getUserById(id: string) {
    return await prisma.user.findUnique({ where: { id } });
  }


  // Mettre à jour un utilisateur
export async function updateUser(id: string, data: Partial<{ name: string; email: string; password: string }>) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }
  
  // Supprimer un utilisateur
  export async function deleteUser(id: string) {
    return await prisma.user.delete({ where: { id } });
  }
  

export async function getAllUsers() {
    return await prisma.user.findMany();
}
  
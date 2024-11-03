import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 


const prisma = new PrismaClient();

export const registerUser = async (email: string, password:string) => {
    const hashedPassword = await bcrypt.hash(password, 10); 
    return await prisma.user.create({
        data: {
            email,
            password : hashedPassword,
            name, 
        }
    })
}

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
      return token;
    } else {
      throw new Error('Invalid credentials');
    }
  };
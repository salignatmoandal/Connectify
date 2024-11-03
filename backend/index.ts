import { Hono } from "hono";
import userRoutes from "./api/src/routes/userRoutes";
import { password } from "bun";
import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker';
import { config } from 'dotenv'; 

const app = new Hono();

<<<<<<< HEAD

=======
const JWT_SECRET = process.env.JWT_SECRET;
>>>>>>> 1babb9611e6408d325ca69c26767c3f3499b1db0

app.route('/api/users', userRoutes);
app.post('/api/users', (c) => {
    const newUser = {
        id: uuid(),
        email: faker.internet.email(),
        name: faker.name.firstName() ,
        password: faker.internet.password(),
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    return c.json(newUser, 201);
});

export default app;


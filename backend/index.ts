import { Hono } from "hono";
import userRoutes from "./api/src/routes/userRoutes";

const app = new Hono();

app.route('/api/users', userRoutes);
app.get('/api', (c) => c.json({ message: 'Hono' }));

export default app;


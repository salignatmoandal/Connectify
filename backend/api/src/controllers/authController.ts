import type { Context } from "hono";
import * as authService from '../services/authService'



export const registerUser = async (c: Context) =>{
    const {email, password, name} = await c.req.json();
    const user = await authService.registerUser(email, password,name)
    return c.json(user)
}


export const login = async (c: Context)=>{
    const {email, password} = await c.req.json();
    const token = await authService.loginUser(email,password);
    return c.json({token})
}

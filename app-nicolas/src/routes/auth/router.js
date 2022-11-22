import { Router } from "express";
import { registerHandler } from "./register.js";

export const authRouter = new Router();

authRouter.post("/register", registerHandler);

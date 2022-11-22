import { Router } from "express";
import { registerHandler } from "./register.js";
import { loginHandler } from "./login.js";

export const authRouter = new Router();

authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);

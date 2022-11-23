import { Router } from "express";
import { requireToken } from "../../token-express.js";
import { registerHandler } from "./register.js";
import { loginHandler } from "./login.js";
import { checkHandler } from "./check.js";

export const authRouter = new Router();

authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);
authRouter.post("/check", requireToken, checkHandler);

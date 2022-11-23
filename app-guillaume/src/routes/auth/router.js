import { Router } from "express";
import { registerHandler } from "./register.js";
import { loginHandler } from "./login.js";
import { checkHandler } from "./check.js";
import { requireAuthentication } from "../../token-express.js";

export const auth = new Router();

auth.post("/register", registerHandler);
auth.post("/login", loginHandler);
auth.post("/check", requireAuthentication, checkHandler);

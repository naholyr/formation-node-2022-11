import { Router } from "express";
import { registerHandler } from "./register.js";
// import { loginHandler } from "./login.js";

export const auth = new Router();

auth.post("/register", registerHandler);
// auth.post("/login", loginHandler);

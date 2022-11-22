import { Router } from "express";
import { registerHandler } from "./register.js";

export const auth = new Router();

auth.post("/register", registerHandler);

import { Router } from "express";

export const home = new Router();

home.get("/", (req, res) => res.send("Home"));

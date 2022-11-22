import { Router } from "express";
import { fiboAsyncHandler } from "./fibo-async.js";

export const fibo = new Router();

const fiboHomeHandler = (req, res) => res.send("fibo-home");

fibo.get("/", fiboHomeHandler);
fibo.get("/:number([1-9][0-9]*)", fiboAsyncHandler);

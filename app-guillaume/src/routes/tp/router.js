import { Router } from "express";
import { tpAsyncHandler } from "./async.js";

// Router: usable in app.use(...)
export const tpRouter = new Router();

// Routes of "tp" router
tpRouter.get("/async", tpAsyncHandler);

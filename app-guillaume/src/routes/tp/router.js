import { Router } from "express";
import { tpAsyncHandler } from "./async.js";
import { tpAsyncAwaitHandler } from "./await.js";

// Router: usable in app.use(...)
export const tpRouter = new Router();

// Routes of "tp" router
tpRouter.get("/async", tpAsyncHandler);
tpRouter.get("/await", tpAsyncAwaitHandler);
// tpRouter.get("/await", tpAsyncAwaitHandler);

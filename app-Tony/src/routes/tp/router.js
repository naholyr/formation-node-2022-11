import { Router } from "express";
import { tpAsyncHandler } from "./async.js";
import { tpAsyncAwaitHandler } from "./await.js";
import { tpSyncHandler } from "./sync.js";

// Router: usable in app.use(...)
export const tpRouter = new Router();

// Routes of "tp" router
tpRouter.get("/sync", tpSyncHandler);
tpRouter.get("/async", tpAsyncHandler);
tpRouter.get("/await", tpAsyncAwaitHandler);

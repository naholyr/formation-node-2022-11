import { Router } from "express";
import { tpAsyncHandler } from "./async.js";
import { tpAsyncAwait } from "../../tp-async/async-await.js";

// Router: usable in app.use(.....)
export const tpRouter = new Router();

// Routes of "tp" router
tpRouter.get("/async", tpAsyncHandler);

import { Router } from "express";

import { fiboAsyncHandler } from "./fibo-async.js";
import { fiboSyncHandler } from "./fibo-sync.js";

export const fiboRouter = new Router()
  .get("/sync/:number([1-9][0-9]*)", fiboSyncHandler)
  .get("/async/:number([1-9][0-9]*)", fiboAsyncHandler);

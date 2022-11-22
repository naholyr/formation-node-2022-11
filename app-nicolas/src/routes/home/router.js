import { Router } from "express";
import { homeTimeoutHandler } from "./home-timeout.js";
import { homeHandler } from "./home.js";

export const homeRouter = new Router()
  .get("/", homeHandler)
  .get("/timeout", homeTimeoutHandler);

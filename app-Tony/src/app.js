// CJS: const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import { tpRouter } from "./routes/tp/router.js";
import { homeHandler } from "./routes/home/home-handler.js";
import { fiboHandler } from "./routes/fibo/fiboHandler.js";
import { authHandler } from "./routes/auth/authHandler.js";
import { loginHandler } from "./routes/auth/loginHandler.js";

// CJS: const app = express();
export const app = express();
app.use(express.static("public")).use(bodyParser.json());

// app.use(middleware) => un router est un middleware
// app.use("/prefix", middleware) => un middleware mais appliqué qu'aux URLs qui commencent par "/prefix"
// app.get("/toto", handler) => un handler qui gère les requêtes sur "/toto" avec la méthode GET

// all routes of "tpRouter" are prefixed by "/tp"
app.get("/", homeHandler);
app.get("/fibo/:number", fiboHandler);
app.post("/auth/register", authHandler);
app.use("/tp", tpRouter);
app.post("/auth/login", loginHandler);

// CJS: module.exports = { app };

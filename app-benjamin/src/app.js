// CJS: const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import { tpRouter } from "./routes/tp/router.js";
import { homeRouter } from "./routes/home/router.js";
import { registerHandler } from "./auth/register.js";
import { checkHandler } from "./auth/check.js";
import { loginHandler } from "./auth/login.js";
import { requireToken } from "./token-express.js";

// CJS: const app = express();
export const app = express();

app.use(express.static("public"));

// all routes of "tpRouter" are prefixed by "/tp"

app.use(bodyParser.json());

app.use("/tp", tpRouter);
app.use("/", homeRouter);
app.post("/auth/register", registerHandler);
app.post("/auth/login", loginHandler);
app.post("/auth/check", requireToken, checkHandler);

// CJS: module.exports = { app };

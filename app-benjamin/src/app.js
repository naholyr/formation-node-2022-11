// CJS: const express = require("express");
import express from "express";
import { tpRouter } from "./routes/tp/router.js";
import { homeRouter } from "./routes/home/router.js";
import { registerHandler } from "./auth/register.js";

// CJS: const app = express();
export const app = express();

app.use(express.static("public"));

// all routes of "tpRouter" are prefixed by "/tp"
app.use("/tp", tpRouter);
app.use("/", homeRouter);
app.post("/auth/register", registerHandler);

// CJS: module.exports = { app };

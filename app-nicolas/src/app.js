// CJS: const express = require("express");
import express from "express";
import { fiboRouter } from "./routes/fibo/router.js";
import { homeRouter } from "./routes/home/router.js";
import { tpRouter } from "./routes/tp/router.js";

// CJS: const app = express();
export const app = express();

// all routes of "tpRouter" are prefixed by "/tp"
app.use("/tp", tpRouter);
app.use("/fibo", fiboRouter);
app.use("/", homeRouter);

// CJS: module.exports = { app };

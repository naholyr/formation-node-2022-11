// CJS: const express = require("express");
import express from "express";
import { authRouter } from "./routes/auth/router.js";
import { fiboRouter } from "./routes/fibo/router.js";
import { homeRouter } from "./routes/home/router.js";
import { tpRouter } from "./routes/tp/router.js";

// CJS: const app = express();
export const app = express();

// if (process.env.NODE_ENV === "development") {
app.use(express.static("public"));
// }

// all routes of "tpRouter" are prefixed by "/tp"
app.use("/", homeRouter);
app.use("/tp", tpRouter);
app.use("/fibo", fiboRouter);
app.use("/auth", authRouter);

// CJS: module.exports = { app };

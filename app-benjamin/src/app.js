// CJS: const express = require("express");
import express from "express";
import { tpRouter } from "./routes/tp/router.js";

// CJS: const app = express();
export const app = express();

// all routes of "tpRouter" are prefixed by "/tp"
app.use("/tp", tpRouter);

// CJS: module.exports = { app };

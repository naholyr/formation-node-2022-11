// CJS: const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import { authRouter } from "./routes/auth/router.js";
import { fiboRouter } from "./routes/fibo/router.js";
import { homeRouter } from "./routes/home/router.js";
import { tpRouter } from "./routes/tp/router.js";
import { requireToken } from "./token-express.js";

// CJS: const app = express();
export const app = express();

// if (process.env.NODE_ENV === "development") {
app.use(express.static("public"));
// }

app.use(bodyParser.json());
/*
app.use((req, res, next) => {
  if (req.is("application/json")) {
    let buffer = Buffer.alloc(0);
    req.on("data", (data) => {
      buffer = Buffer.concat([buffer, data]);
    });
    req.on("end", () => {
      const body = JSON.parse(buffer.toString());
      req.body = body;
      next();
    });
  } else {
    next();
  }
});
*/

// all routes of "tpRouter" are prefixed by "/tp"
app.use("/", homeRouter);
app.use("/tp", tpRouter);
app.use("/fibo", requireToken, fiboRouter); // Dangerous: requires login
app.use("/auth", authRouter);

// CJS: module.exports = { app };

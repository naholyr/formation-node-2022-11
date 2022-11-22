import express from "express";
import { tpRouter } from "./routes/tp/router.js";
import { home } from "./routes/home/router.js";
import { fibo } from "./routes/fibo/router.js";

export const app = express();

app.use("/tp", tpRouter);
app.use("/home", home);
app.use("/fibo", fibo);

import express from "express";
import { tpRouter } from "./routes/tp/router.js";

export const app = express();

app.use("/tp", tpRouter);
// app.get('/tp', home);
// app.get('/tp', auth.login);
// app.get('/tp', tp);

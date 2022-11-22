import express from "express";
import bodyParser from "body-parser";
import { tpRouter } from "./routes/tp/router.js";
import { home } from "./routes/home/router.js";
import { fibo } from "./routes/fibo/router.js";
import { auth } from "./routes/auth/router.js";

export const app = express();

// if(process.env.NODE_ENV === "development")
app.use(express.static("public"));

app.use(bodyParser.json());

app.use("/tp", tpRouter);
app.use("/fibo", fibo);
app.use("/auth", auth);
app.use("/", home);

import { fibo } from "../../fibo.js";

export const fiboSyncHandler = (req, res) => {
  const n = Number(req.params.number);
  const result = fibo(n);
  res.send({ input: n, output: result });
};

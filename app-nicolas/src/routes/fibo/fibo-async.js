import { fiboAsync } from "../../fibo.js";

export const fiboAsyncHandler = async (req, res) => {
  const n = Number(req.params.number);
  const result = await fiboAsync(n);
  res.send({ input: n, output: result });
};

import { fibo } from "../../fibo.cjs";

export const fiboHandler = (req, res) => {
  const n = Number(req.params.number);

  if (isNaN(n)) {
    res.status(400).send({ error: "number is not a number" });
    return;
  }

  const result = fibo(n);
  res.send(String(result));
};

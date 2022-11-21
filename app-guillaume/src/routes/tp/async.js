import { tpAsyncSync } from "../../tp-async/sync.js";

export const tpAsyncHandler = (req, res) => {
  const result = tpAsyncSync();
  res.send(result);
};

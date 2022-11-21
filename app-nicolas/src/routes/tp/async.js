import { tpAsyncSync } from "../../tp-async/sync.js";

// Request handler: usable in app.xxx(...) or in any router
export const tpAsyncHandler = (req, res) => {
  const resultSync = tpAsyncSync();
  res.send(resultSync);
};

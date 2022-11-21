// Request handler: usable in app.xxx(...) or in any router
import { tpasync } from "../../tp-async/sync.js";

export const tpAsyncHandler = (req, res) => {
  const resultSync = tpasync();
  res.send(resultSync);
};

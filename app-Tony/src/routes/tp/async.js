// Request handler: usable in app.xxx(...) or in any router
import { TpSyncAsync } from "../../tp-async/sync.js";

export const tpAsyncHandler = (req, res) => {
  res.send(TpSyncAsync());
};

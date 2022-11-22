import { tpAsyncSync } from "../../tp-async/sync.js";

// Request handler: usable in app.xxx(...) or in any router
export const tpSyncHandler = (req, res) => {
  try {
    const resultSync = tpAsyncSync();
    res.send(resultSync);
  } catch (err) {
    res.status(500).send(String(err));
  }
};

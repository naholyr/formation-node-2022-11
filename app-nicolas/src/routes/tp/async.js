import { tpAsyncPromise } from "../../tp-async/async-promise.js";
import { tpAsyncSync } from "../../tp-async/sync.js";

// Request handler: usable in app.xxx(...) or in any router
export const tpAsyncHandler = (req, res) => {
  // const resultSync = tpAsyncSync();
  // res.send(resultSync);

  tpAsyncPromise()
    .then((string) => res.send(string))
    .catch((err) => res.status(500).send(String(err)));
};

// Request handler: usable in app.xxx(...) or in any router
import { tpAsyncPromise } from "../../tp-async/async-promise.js";

export const tpAsyncHandler = (req, res) => {
  tpAsyncPromise().then((result) => {
    res.send(result);
  });
};

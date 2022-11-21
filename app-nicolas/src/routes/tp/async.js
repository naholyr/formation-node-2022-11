import { tpAsyncPromise } from "../../tp-async/async-promise.js";

// Request handler: usable in app.xxx(...) or in any router
export const tpAsyncHandler = (req, res) => {
  tpAsyncPromise()
    .then((string) => res.send(string))
    .catch((err) => res.status(500).send(String(err)));
};

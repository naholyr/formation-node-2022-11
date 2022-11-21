import { tpAsyncCallback } from "../../tp-async/async-callback.js";

// Request handler: usable in app.xxx(...) or in any router
export const tpAsyncCallbackHandler = (req, res) => {
  tpAsyncCallback((err, string) => {
    if (err) {
      res.status(500).send(String(err));
      return;
    }

    res.send(string);
  });
};

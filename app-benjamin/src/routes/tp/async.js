// Request handler: usable in app.xxx(...) or in any router
import { tpasync } from "../../tp-async/sync.js";
import { tpAsyncPromise } from "../../tp-async/async-promise.js";

export const tpAsyncHandler = (req, res) => {
  const stringP = tpAsyncPromise();
  stringP.then((string) => {
    res.send(string);
  });
};

/*
export const tpAsyncHandler = (req, res) => {
  const resultSync = tpasync();
  res.send(resultSync);
}; */

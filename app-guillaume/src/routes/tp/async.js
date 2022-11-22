import { tpAsyncPromise } from "../../tp-async/async-promise.js";

/*
export const tpAsyncHandler = (req, res) => {
  tpAsyncPromise().then((response) => res.send(response));
};
*/

export const tpAsyncHandler = async (req, res) => {
  const result = await tpAsyncPromise();
  return res.send(result.join(" "));
};

import { tpAsyncAwait } from "../../tp-async/async-await.js";

export const tpAsyncAwaitHandler = async (req, res) => {
  try {
    const content = await tpAsyncAwait();
    res.send(content);
  } catch (err) {
    res.status(500).string(String(err));
  }
};

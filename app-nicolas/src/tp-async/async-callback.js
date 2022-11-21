import { readFile } from "node:fs";

export const tpAsyncCallback = (cb) => {
  let pending = 3;
  let error = null;
  let contents = [];

  const readOneFile = (index, path) => {
    readFile(path, "utf-8", (err, content) => {
      // already another error
      if (error) return onOneRead();
      // new error
      if (err) {
        error = err;
        return onOneRead();
      }
      // ok
      contents[index] = content;
      return onOneRead();
    });
  };

  const onOneRead = () => {
    pending--;
    if (pending === 0) {
      onAllRead();
    }
  };

  const onAllRead = () => {
    cb(error, contents.join(""));
  };

  readOneFile(0, "./src/tp-async/1.txt");
  readOneFile(1, "./src/tp-async/2.txt");
  readOneFile(2, "./src/tp-async/3.txt");
};

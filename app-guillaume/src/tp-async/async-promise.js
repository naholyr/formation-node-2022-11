import { readFile } from "node:fs/promises";

export const tpAsyncPromise = () => {
  const content1P = readFile("./src/tp-async/1.txt", "utf-8");
  const content2P = readFile("./src/tp-async/2.txt", "utf-8");
  const content3P = readFile("./src/tp-async/3.txt", "utf-8");

  return content1P.then((content1) => {
    return content2P.then((content2) => {
      return content3P.then((content3) => {
        return content1 + content2 + content3;
      });
    });
  });
};

import { readFile } from "node:fs/promises";

export const tpAsyncPromise = () => {
  const content1P = readFile("./src/tp-async/1.txt", "utf-8");
  const content2P = readFile("./src/tp-async/2.txt", "utf-8");
  const content3P = readFile("./src/tp-async/3.txt", "utf-8");

  return Promise.all([content1P, content2P, content3P]);
};

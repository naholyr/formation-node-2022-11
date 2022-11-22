import { readFile } from "node:fs/promises";

export const tpAsyncAwait = async () => {
  const content1P = readFile("./src/tp-async/1.txt", "utf-8"); // 2s
  const content2P = readFile("./src/tp-async/2.txt", "utf-8"); // 1s
  const content3P = readFile("./src/tp-async/3.txt", "utf-8"); // 3s

  const contents = await Promise.all([content1P, content2P, content3P]); // 3s

  return contents.join("");
};

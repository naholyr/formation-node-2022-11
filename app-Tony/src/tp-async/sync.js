import { readFileSync } from "node:fs";

// tpAsyncSync: () => string

export const tpAsyncSync = () => {
  const content1 = readFileSync("./src/tp-async/1.txt", "utf-8");
  const content2 = readFileSync("./src/tp-async/2.txt", "utf-8");
  const content3 = readFileSync("./src/tp-async/3.txt", "utf-8");

  return content1 + content2 + content3;
};

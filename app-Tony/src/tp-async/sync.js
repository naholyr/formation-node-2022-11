import { readFileSync } from "node:fs";

const FILE_1 = "./src/tp-async/1.txt";
const FILE_2 = "./src/tp-async/2.txt";
const FILE_3 = "./src/tp-async/3.txt";

export const TpSyncAsync = () => {
  const content1 = readFileSync(FILE_1, "utf-8");
  const content2 = readFileSync(FILE_2, "utf-8");
  const content3 = readFileSync(FILE_3, "utf-8");
  const result = content1 + content2 + content3;
  return result;
};

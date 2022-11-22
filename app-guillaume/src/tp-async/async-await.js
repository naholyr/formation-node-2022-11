import { readFile } from "node:fs/promises";

/*
async/await

- await promise
  on attend la résolution, et l'expression est accessible

- échec:
  try {
    const x = await promise
    ...
  } catch (err) {
    onError(err)
  } finally {
    onEnd()
  }
  équivalent à:
  promise.then((x) => {
    ...
  }).catch((err) => {
    onError(err)
  }).finally(() => {
    onEnd()
  })
*/

export const tpAsyncAwait = async () => {
  const content1P = readFile("./src/tp-async/1.txt"); // 2s
  const content2P = readFile("./src/tp-async/2.txt"); // 1s
  const content3P = readFile("./src/tp-async/3.txt"); // 3s

  const contents = await Promise.all([content1P, content2P, content3P]); // 3s

  console.log(contents);

  return contents.join("");
};

export const tpAsyncAwaitSeries = async () => {
  const content1 = await readFile("./src/tp-async/1.txt", "utf-8"); // 2s
  const content2 = await readFile("./src/tp-async/2.txt", "utf-8"); // 1s (T + 3)
  const content3 = await readFile("./src/tp-async/3.txt", "utf-8"); // 3s (T + 6)

  return content1 + content2 + content3; // 6s
};

export const tpAsyncAwaitHiddenConcurrency = async () => {
  const content1P = readFile("./src/tp-async/1.txt", "utf-8"); // 2s
  const content2P = readFile("./src/tp-async/2.txt", "utf-8"); // 1s (T + 3)
  const content3P = readFile("./src/tp-async/3.txt", "utf-8"); // 3s (T + 6)

  return (await content1) + (await content2) + (await content3); // 6s
};

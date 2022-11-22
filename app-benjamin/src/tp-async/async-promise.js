import { readFile } from "node:fs/promises";

export const tpAsyncPromise = () => {
  const content1P = readFile("./src/tp-async/1.txt", "utf-8");
  const content2P = readFile("./src/tp-async/2.txt", "utf-8");
  const content3P = readFile("./src/tp-async/3.txt", "utf-8");

  //****************** Promise.all(promesses) **************************
  const contentsP = Promise.all([content1P, content2P, content3P]);

  return contentsP.then((contents) => contents.join(""));

  /* *******************  Promise#then(handler) ************************
  return content1P.then((content1) => {
    return content2P.then((content2) => {
      return content3P.then((content3) => {
        return content1 + content2 + content3;
      });
    });
  });   */
};

/*
readFile("./src/tp-async/1.txt", "utf-8", (err, content) => {
  if (err) {
    console.error("error", err);
  } else {
    console.log("done reading 1", content);
  }
});
*/

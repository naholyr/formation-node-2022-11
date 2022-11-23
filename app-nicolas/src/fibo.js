import { promisify } from "node:util";

const sleep = promisify(setTimeout);

// Fibo version récursive pour cramer le CPU
export const fibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

export const fiboAsync = async (n) => {
  if (n === 0) {
    await sleep(0);
    return 0;
  }
  if (n === 1) {
    await sleep(0);
    return 1;
  }
  const fibo1 = await fiboAsync(n - 1);
  const fibo2 = await fiboAsync(n - 2);
  return fibo1 + fibo2;
};

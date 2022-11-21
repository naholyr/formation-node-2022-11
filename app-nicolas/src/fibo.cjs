"use strict";

// Fibo version récursive pour cramer le CPU
const fibo = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

module.exports = {
  fibo,
};

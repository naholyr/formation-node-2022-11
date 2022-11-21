"use strict";

const obj = Object.freeze({ n: 32, o: { n: 42 } });
obj.o.n = 43;
console.log(obj);
obj.n = 33;

foo();

console.log(globalThis.x);

function foo() {
  x = 42;

  log(x);

  return x;

  function log(s) {
    console.log(s);
  }
}

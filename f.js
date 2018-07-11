"use strict";

function f(a) {
  return function(b) {
    return a + b;
  };
}

console.log(typeof f(1)(2));
console.log(typeof f(5)(-1));
console.log(typeof f(3)(2));
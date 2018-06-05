"use strict";

let f = a => {
  let allSum = a;

  let sum = b => {
    allSum += b;
    return sum;
  };

  sum.toString = function() {
    return allSum;
  };

  return sum;
};

alert(f(1)(3));

/*

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]



*/

function powersOfTwo(n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }
  return res;
}

powersOfTwo = (n) => [...Array(n + 1)].map((e, i) => Math.pow(2, i));

function powersOfTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i);
}

function powersOfTwo(n) {
  var arr = [];

  for (var i = 0; i <= n; ++i) {
    arr.push(Math.pow(2, i));
  }

  return arr;
}

function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
}

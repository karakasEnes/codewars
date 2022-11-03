/*

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


*/

var maxSequence = function (arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let x = i; x < arr.length; x++) {
      const slicedArr = arr.slice(i, x + 1);
      const totalSlidedArr = slicedArr.reduce((prev, cur) => prev + cur, 0);
      if (totalSlidedArr > max) max = totalSlidedArr;
    }
  }

  return max;
};

var maxSequence = function (arr) {
  var min = 0,
    ans = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};

// interesting!
var maxSequence = function (arr) {
  var currentSum = 0;
  return arr.reduce(function (maxSum, number) {
    currentSum = Math.max(currentSum + number, 0);
    return Math.max(currentSum, maxSum);
  }, 0);
};

var maxSequence = function (arr) {
  var max = 0;
  var cur = 0;
  arr.forEach(function (i) {
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
};

var maxSequence = function (arr) {
  var i,
    j,
    k = 0,
    r;
  for (i = 0; i < arr.length; ++i) {
    for (r = 0, j = i; j < arr.length; ++j) {
      r += arr[j];
      k = Math.max(k, r);
    }
  }
  return k;
};

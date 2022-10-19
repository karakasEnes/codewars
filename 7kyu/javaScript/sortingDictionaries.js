/*

Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

The list must be sorted by the value and be sorted largest to smallest.

Examples
sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

*/

function sortDict(dict) {
  const fixedArry = Object.entries(dict).map((el) => {
    el[0] = parseInt(el[0]) || el[0];
    return el;
  });

  return fixedArry.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    return 0;
  });
}

function sortDict(dict) {
  return Object.keys(dict)
    .map(function (v) {
      return [+v || v, dict[v]];
    })
    .sort(function (a, b) {
      return a[1] < b[1];
    });
}

function sortDict(dict) {
  return Object.keys(dict)
    .map(function (k) {
      return [isNaN(k) ? k : +k, dict[k]];
    })
    .sort(function (a, b) {
      return b[1] - a[1];
    });
}

function sortDict(dict) {
  var toSort = [];
  for (var k in dict) {
    var p = parseInt(k);
    toSort.push([!isNaN(p) ? p : k, dict[k]]);
  }
  toSort.sort(function (a, b) {
    return b[1] - a[1];
  });
  return toSort;
}

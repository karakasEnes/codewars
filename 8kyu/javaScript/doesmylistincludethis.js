/*

Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

*/

function include(arr, item) {
  return arr.includes(item);
}

function include(arr, item) {
  return arr.indexOf(item) !== -1;
}

const include = (arr, item) => arr.includes(item);

var include = (a, i) => a.indexOf(i) > -1;

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text) {
  const obj = text
    .toLowerCase()
    .split('')
    .reduce((prev, cur) => {
      prev[cur] ? (prev[cur] += 1) : (prev[cur] = 1);
      return prev;
    }, {});

  let r = 0;

  for (const [k, v] of Object.entries(obj)) {
    if (v > 1) {
      r++;
    }
  }

  return r;
}

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

function duplicateCount(text) {
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];

  lower.split('').forEach(function (letter) {
    if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
}

function duplicateCount(text) {
  var input = text.toLowerCase().split('');

  var obj = {};

  for (var i in input) {
    if (!obj[input[i]]) {
      obj[input[i]] = 1;
    } else {
      obj[input[i]] += 1;
    }
  }

  var result = 0;

  for (var prop in obj) {
    if (obj[prop] > 1) {
      result++;
    }
  }

  return result;
}

function duplicateCount(text) {
  var count = text
    .toLowerCase()
    .split('')
    .reduce((accum, curr) => {
      accum[curr] ? (accum[curr] += 1) : (accum[curr] = 1);
      return accum;
    }, {});
  return Object.keys(count).filter((key) => count[key] > 1).length;
}

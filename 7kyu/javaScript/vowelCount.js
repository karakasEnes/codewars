/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  return 0;
}

*/

//SOLUTION

function getCount(str) {
  const vowels = 'aeiou';

  let c = 0;
  for (const letter of str) {
    if (vowels.includes(letter)) {
      c++;
    }
  }
  return c;
}

// OTHER SOLUTIONS

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
  return str.split('').filter((c) => 'aeiouAEIOU'.includes(c)).length;
}

function getCount(str) {
  var vowelsCount = 0;
  str.split('').forEach(function (x) {
    if ((x == 'a') | (x == 'e') | (x == 'i') | (x == 'o') | (x == 'u')) {
      vowelsCount += 1;
    }
  });
  return vowelsCount;
}

function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length : 0;
}

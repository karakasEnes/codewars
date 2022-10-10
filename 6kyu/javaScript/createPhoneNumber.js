/*

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!


function createPhoneNumber(numbers){
  
}

*/

// SOLUTIONS

function createPhoneNumber(numbers) {
  return numbers.reduce((acc, curV, curIndex) => {
    if (curIndex === 0) {
      acc += '(' + curV;
    }
    if (curIndex >= 1 && curIndex <= 2) {
      if (curIndex === 2) {
        acc += curV + ') ';
      } else {
        acc += curV;
      }
    }

    if (curIndex >= 3 && curIndex <= 5) {
      if (curIndex === 5) {
        acc += curV + '-';
      } else {
        acc += curV;
      }
    }

    if (curIndex >= 6 && curIndex <= 9) {
      acc += curV;
    }

    return acc;
  }, '');
}

function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx';

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}

function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return (
    '(' +
    numbers.substring(0, 3) +
    ') ' +
    numbers.substring(3, 6) +
    '-' +
    numbers.substring(6)
  );
}

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

function createPhoneNumber(numbers) {
  var n = numbers;
  return (
    '(' +
    n[0] +
    n[1] +
    n[2] +
    ') ' +
    n[3] +
    n[4] +
    n[5] +
    '-' +
    n[6] +
    n[7] +
    n[8] +
    n[9]
  );
}

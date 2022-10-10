/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   
}

*/

// SOLUTION

function solution(str) {
  // is even or odd

  if (str === '') return [];

  const strLen = str.length;
  const isEven = strLen % 2 === 0 ? true : false;

  if (!isEven) {
    str = str + '_';
  }

  let res = [];

  let x = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      x = '';
      x += str[i];
    } else {
      x += str[i];
      res.push(x);
    }
  }

  return res;
}

//OTHER SOLUTIONS

function solution(s) {
  return (s + '_').match(/.{2}/g) || [];
}

function solution(str) {
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return result;
}

function solution(str) {
  arr = [];
  for (var i = 0; i < str.length; i += 2) {
    second = str[i + 1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}

const solution = (str) => (str + '_').match(/../g) || [];

function solution(str) {
  let res = [];
  for (var i = 0; i < str.length; i += 2)
    res.push(`${str[i] + (str[i + 1] || '_')}`);
  return res;
}

function solution(str) {
  str.length % 2 && (str += '_');
  return str.match(/.{1,2}/g) || [];
}

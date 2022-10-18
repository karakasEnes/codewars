/*

You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string: if one of them is 0, and the other one is 1, remove these two digits from the string.

Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.

Examples
For "01010" the result should be 1:

"01010"  -->  "  010"  -->  "    0"
For "110100" the result should be 2:

"110100"  -->  "1  100"  -->  "1    0"
Input/Output
[input] string s
The initial string.

[output] an integer
The minimum length of the string that may remain after applying the described operations as many times as possible.

*/

function zeroAndOne(s) {
  for (let i = 0; i < s.length - 1; i++) {
    const slicedStr = s.slice(i, i + 2);
    if (slicedStr.includes('0') && slicedStr.includes('1')) {
      s = s.slice(0, i) + '  ' + s.slice(i + 2);
    }
  }

  return s.split('').filter((n) => n !== ' ').length;
}

function zeroAndOne(s) {
  return s.replace(/(01|10)*/g, '').length;
}

function zeroAndOne(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if ((s[i] == '0' && s[i + 1] == '1') || (s[i] == '1' && s[i + 1] == '0'))
      i++;
    else cnt++;
  }
  return cnt;
}

const zeroAndOne = ($) => $.replace(/01/g, '').replace(/10/g, '').length;

const zeroAndOne = (s) => s.replace(/(10|01)/g, '').length;

function zeroAndOne(s) {
  let out = 0;
  for (let i = 0; i < s.length; i++)
    if (s[i] === s[i + 1] || i === s.length - 1) out++;
    else i++;
  return out;
}

var zeroAndOne = function (s) {
  return s.replace(/(01|10)*/g, '').length;
};

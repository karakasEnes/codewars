/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
  return s
    .split('')
    .map((let, ind) => {
      let r = '';
      for (let i = 0; i < ind + 1; i++) {
        r += let.toLowerCase();
      }
      return r[0].toUpperCase() + r.slice(1);
    })
    .join('-');
}

function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

function accum(s) {
  return s
    .split('')
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join('-');
}

function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }
  return result.join('-');
}

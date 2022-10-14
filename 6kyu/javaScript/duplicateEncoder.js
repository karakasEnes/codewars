/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


*/

function duplicateEncode(word) {
  const obj = word
    .toLowerCase()
    .split('')
    .reduce((prev, cur) => {
      prev[cur] ? prev[cur]++ : (prev[cur] = 1);
      return prev;
    }, {});

  let r = '';

  for (const letter of word.toLowerCase()) {
    obj[letter] > 1 ? (r += ')') : (r += '(');
  }

  return r;
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}

function duplicateEncode(word) {
  var unique = '';
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += '(';
    } else {
      unique += ')';
    }
  }
  return unique;
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')'
  );
}

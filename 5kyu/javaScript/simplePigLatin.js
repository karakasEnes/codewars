/*


Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


*/

function pigIt(str) {
  return str
    .split(' ')
    .map((word) => {
      if (word.toLowerCase() === word.toUpperCase()) return word;
      return word.slice(1) + word[0] + 'ay';
    })
    .join(' ');
}

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord
    .map(function (word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    })
    .join(' ');
}

function pigIt(str) {
  return str
    .split(' ')
    .map((item) => `${item.substr(1)}${item[0]}ay`)
    .join(' ');
}

function pigIt(str) {
  //Code here
  return str
    .split(' ')
    .map((word) => {
      return word.substring(1) + word[0] + 'ay';
    })
    .join(' ');
}

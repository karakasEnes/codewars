/*

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

function rot13(message) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return message
    .split('')
    .map((letter) => {
      if (!letter.match(/[a-zA-Z]/g)) return letter;

      const letIndex = alphabet.indexOf(letter.toLowerCase());
      let plus13Index = letIndex + 13;
      if (plus13Index > 25) {
        const n = (plus13Index % 25) - 1;
        plus13Index = n;
      }
      const foundLet = alphabet[plus13Index];

      return letter === letter.toUpperCase()
        ? foundLet.toUpperCase()
        : foundLet;
    })
    .join('');
}

function rot13(message) {
  var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}

const rot13 = (str) =>
  str.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)
    )
  );

var codeA = 'A'.charCodeAt(0),
  codeZ = 'Z'.charCodeAt(0),
  codea = 'a'.charCodeAt(0),
  codez = 'z'.charCodeAt(0);
function rot13(message) {
  return message
    .split('')
    .map(function (char) {
      var code = char.charCodeAt(0);
      if (codeA <= code && code <= codeZ) {
        return String.fromCharCode(((code - codeA + 13) % 26) + codeA);
      } else if (codea <= code && code <= codez) {
        return String.fromCharCode(((code - codea + 13) % 26) + codea);
      }
      return char;
    })
    .join('');
}

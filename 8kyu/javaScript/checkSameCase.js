/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1



function sameCase(a, b){
  return 0;
}


*/

function sameCase(a, b) {
  const isLetter = (x) => x.toUpperCase() != x.toLowerCase();
  const isLowerCase = (x) => x === x.toLowerCase();
  const isUpperCase = (x) => x === x.toUpperCase();

  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  } else if (isLowerCase(a) && isLowerCase(b)) {
    return 1;
  } else if (isUpperCase(a) && isUpperCase(b)) {
    return 1;
  } else {
    return 0;
  }
}

function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}

function sameCase(a, b) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  if (!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase()))
    return -1;

  const checkCase = (x) => {
    if (x === x.toLowerCase()) return 'lower';
    if (x === x.toUpperCase()) return 'upper';
  };

  return checkCase(a) === checkCase(b) ? 1 : 0;
}

sameCase = (a, b) =>
  /[a-z]/i.test(a) && /[a-z]/i.test(b)
    ? Number(/[a-z]/.test(a) == /[a-z]/.test(b))
    : -1;

function sameCase(a, b) {
  if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
  if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
  if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
  return 1;
}

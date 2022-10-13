/*


the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100




*/

function validParentheses(parens) {
  if (parens.includes('(') && parens.includes(')')) {
    if (parens === ')(') return false;
    parens = parens.replace(/\(\)/g, '');

    return validParentheses(parens);
  }

  return parens.length === 0;
}

function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}

// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string) {
  var tokenizer = /[()]/g, // ignores characters in between; parentheses are
    count = 0, // pretty useless if they're not grouping *something*
    token;
  while (((token = tokenizer.exec(string)), token !== null)) {
    if (token == '(') {
      count++;
    } else if (token == ')') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count == 0;
}

function validParentheses(parens) {
  var indent = 0;

  for (var i = 0; i < parens.length && indent >= 0; i++) {
    indent += parens[i] == '(' ? 1 : -1;
  }

  return indent == 0;
}

function validParentheses(parens) {
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, '');
  return !parens;
}

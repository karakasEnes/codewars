/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false


*/

function generateHashtag(str) {
  const trimmed = str.trim();
  if (!trimmed) return false;
  const r =
    '#' +
    trimmed
      .split(' ')
      .filter((n) => n)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('');
  return r.length > 140 ? false : r;
}

//
function generateHashtag(str) {
  return str.length > 140 || str === ''
    ? false
    : '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//

function generateHashtag(str) {
  if (!str || str.length < 1) return false;

  var r =
    '#' +
    str
      .split(' ')
      .map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      })
      .join('');
  return r.length > 140 ? false : r;
}

function generateHashtag(str = '') {
  var hashtag = `#${str
    .trim()
    .replace(/(?:\b|\s)(\w)/gi, (m, g) => g.toUpperCase())}`;
  return !!str && hashtag.length <= 140 && hashtag;
}

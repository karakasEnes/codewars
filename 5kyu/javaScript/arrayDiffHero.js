/*

You know about simple Array.diff task. Now try to solve enhanced version!

Your goal in this kata is to implement a difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b. Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5 000 000 elements.

arrayDiffVeryFast([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from another:

arrayDiffVeryFast([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiffVeryFast(a, b) {
  b = new Set(b);
  return a.filter((n) => !b.has(n));
}

const array_diff_very_fast = (a, b, c = new Set(b)) =>
  a.filter((x) => !c.has(x));

function get_bit_mask(arr) {
  let mask = 0;
  for (let i = 0; i < arr.length; i++) {
    mask |= 1 << arr[i];
  }
  return mask;
}

function array_diff_very_fast(a, b) {
  const mask = get_bit_mask(b);
  const res = [];
  for (let i = 0; i < a.length; i++) {
    if ((mask & (1 << a[i])) === 0) {
      res.push(a[i]);
    }
  }
  return res;
}

const array_diff_very_fast = (a, b) => {
  let obj = {};
  for (e of b) obj[e] = true;
  return a.filter((val) => (obj[val] ? false : true));
};

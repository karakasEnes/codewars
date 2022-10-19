/*

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

*/

reverse = function (array) {
  const r = [];
  for (let i = array.length - 1; i > -1; i--) {
    r.push(array[i]);
  }
  return r;
};

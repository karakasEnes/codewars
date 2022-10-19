/*

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


*/

function cakes(recipe, available) {
  const a = [];
  for (const [k, v] of Object.entries(recipe)) {
    if (!available[k]) break;
    a.push(Math.floor(available[k] / v));
  }

  return a.length === 0 ? 0 : Math.min(...a);
}

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function (val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      val
    );
  }, Infinity);
}

const cakes = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
  );

function cakes(recipe, available) {
  var numCakes = [];

  for (var key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      if (key in available) {
        numCakes.push(Math.floor(available[key] / recipe[key]));
      } else {
        return 0;
      }
    }
  }

  return Math.min.apply(null, numCakes);
}

function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map((e) => (available[e] / recipe[e]) >> 0)
  );
}
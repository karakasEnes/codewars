/*

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.



*/

function highAndLow(numbers) {
  const r = numbers.split(' ').reduce(
    (prev, cur) => {
      const num = parseInt(cur);

      if (prev.max && num > prev.max) {
        prev.max = num;
      }

      if (prev.low && prev.low > num) {
        prev.low = num;
      }

      if (!prev.low && !prev.max) {
        prev.max = num;
        prev.low = num;
      } else if (!prev.low) {
        prev.low = num;
      } else if (!prev.max) {
        prev.max = num;
      }

      return prev;
    },
    {
      max: '',
      low: '',
    }
  );

  return `${r.max} ${r.low}`;
}

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers) {
  let arr = numbers.split(' ').map(Number);
  return Math.max(...arr) + ' ' + Math.min(...arr);
}

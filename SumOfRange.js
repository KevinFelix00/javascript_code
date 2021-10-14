/* write a range function that takes two arguments, start and end, returns an array containing all the numbers from start up to (and including) end. */

let arr = new Array();  // create a new array.
function range(start, end) {
   "use strict";
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
  return arr;
}

console.log(range(1, 10));

/* Next, write a sum function that takes an array of numbers and returns the sum of this numbers. Run the example program and see whether it does indeed return 55. */

function sum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum(range(10)));

/* Modify your range function to take an optional third argument that indicates the "step" value use when building the array. if no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]. */

function ranges(start, end, step) {
    if (step !== undefined) {
        for (let i = start; i < end; i += 2) {
            arr.push(i);  // Gives this [1, 3, 5, 7, 9]
        }
    }
  else {
      return range(1, 10); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
  }
  return arr;
}

console.log(ranges(1, 10, 2));

// Negative step values

// function rangeNegativeStep(start, end, step) {
//     if (step == -( Number)) {
//         for (let i = start; i > end; i -= 1) {
//             arr.push(i);
//         }
//     } else { return range(1, 10); }

// }

// console.log(rangeNegativeStep(5, 2, -1));
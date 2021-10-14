/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers  from start up to (and including) end.
 Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55  */
// there are two ways to do this
// First way

let arr = new Array();    // create a new array.
 function range(start, end) {
    'use strict';
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  return arr;
 }

console.log(range(1, 10));

//  sum function Declaration

function sum(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sum(1, 10, 2));

/* Mordify range function to take an optional third argument that indicates the "step" value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4,3, 2] */

function ranges(start, end, step) {
     if (step !== undefined) {
        for (let i = start; i < end; i += 2) {
             arr.push(i);   // Gives this [1, 3, 5, 7, 9].
        }
    } else return range(1, 10);   // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
return arr;
}

console.log(ranges(1, 10, 2));

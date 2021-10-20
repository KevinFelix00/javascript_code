/* Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.*/

// using the loop version
'use strict';
function every1(arr, test) {
    function test() { return true; }
    var arr = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < arr.length; i++) {
        if (!test(arr[i])) return false;
    }
    return true;
}

// using the some method version
function every2(arr, test) {
    var arr = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    arr.some((item) => !test())
}

console.log(every1(arr, (item) => (item % 2) == 0));  // check whether any element in the is even
console.log(every2(arr, (item) => (item % 2) == 0));  // check whether any element in the is even
console.log(every1((arr, (item) => (item < 20))));     
console.log(every2(arr, (item) => (item < 20)));


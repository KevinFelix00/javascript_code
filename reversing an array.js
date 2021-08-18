/* Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given  as argument by reversing its elements. Neither may use the standard reverse method. */


function reverseArray(arr1, arr2) {

    [arr1, arr2] = [arr2, arr1];
    return arr1.concat(arr2);
}

console.log(reverseArray([1, 2, 3, 4, 5, 6], [7, 8, 9]));

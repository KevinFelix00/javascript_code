/*write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that same elements in the inverse order */

function reverseArray(arr) {
    arr.reverse();
    var rArr = [];
    rArr.push(arr);
    return rArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

/* second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

function reverseArrayInPlace(arr) {
    arr.sort((a, b) => b - a);
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
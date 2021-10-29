/* Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given  as argument by reversing its elements. Neither may use the standard reverse method. */

function reverseArray(arr) {
      arr.reverse();  // reverse the array
      var rArr = [];  // create an array
      rArr.push();    // add the reverse element to the new array
    return rArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

/* second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

function reverseArrayInPlace(arr) {
     arr.sort((a, b) => b - a);  // sorting the in descending order
      return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

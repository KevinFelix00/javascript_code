/* use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elements of the original arrays */

function combinationofarrays(arr1, arr2) {
    'use strict';
    arr1 = [];
    arr2 = ["flatten"];
    let combineAnArrays = arr1.concat(arr2);  // combine arrays.
    console.log(combineAnArrays);
    console.log(combineAnArrays.reduce((result) => {   // reduce method combine all the element in an array into a single value.
        for (let elt of combineAnArrays) {   //iterate through the new array combineAnArrays.
            result = [];  // create a new array.
            result.push(elt);  // append elt to the new array.
              
        }
        return result;
    }))
}

combinationofarrays();

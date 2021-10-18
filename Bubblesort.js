/* Implement a Bubble sort algorithm */

function Bubblesort(arr) {
    var len = arr.length;
    for (let i = len - 1; i > 0; i--) {
        for (let j = 1; j < i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];   // referenceing the index value 5, 7, 2 to arr[j-1]
                arr[j] = temp;         // referencing 7, 9, 1 to arr[j]
            }
        }
    }
    return arr;
}

console.log(Bubblesort([7, 5, 2, 4, 3, 9]));   // [2, 3, 4, 5, 7, 9]
console.log(Bubblesort([9, 7, 5, 4, 3, 1]));   // [3, 4, 5, 7, 9, 1]
console.log(Bubblesort([1, 2, 3, 4, 5, 6]));   // [1, 2, 3, 4, 5, 6]

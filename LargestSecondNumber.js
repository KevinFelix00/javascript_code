/* Find the largest second numbers in an array */

function sLargestNumber(arr) {
    arr = [45, 20, 1, 60];
    const arrSort = arr.sort((a, b) => a - b);  // sorting the array in ascending order.
    return arrSort[arr.length - 2];  // indexing the array --> [1, 20, 45, 60].
}

console.log(sLargestNumber(arr))  // 45
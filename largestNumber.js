/* Find the largest number in an array */

function largest(arr) {
    arr = [1, 2, 3, 8, 5, 4, 6, 7];
    var max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(largest(arr))  // 8
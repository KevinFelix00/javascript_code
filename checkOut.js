/* write a program that check if all values in the arrays are true */

// Test
var marksArray = [32, 33, 76, 80, 23];

// Check Out
function checkMarks(mark) {
    return mark > 30;
}

console.log(marksArray.every(checkMarks));   // false

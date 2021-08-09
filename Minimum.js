/* Write a function min that takes two arguments and return their minimum. */

// Example
console.log(Math.min(2, 6)); // 2

// Setup
function min(a, b){}

// Only change code below this line

function min(a, b) {
    if (a - b > 0 && b-a < 0 ) {
        return b;
    } else { return a; }
}

console.log(min(4, -1));



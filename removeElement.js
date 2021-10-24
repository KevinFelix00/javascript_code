/* Find the index of the array element you want to remove */

var colors = ["red", "blue", "black", "green"];

console.log(colors);

function removeElement(value) {
    const index = colors.indexOf(value);
    if (index > -1) {
        colors.splice(index, 1);
    }
}

// remove colors

removeElement("black");
console.log(colors);

/* Write a program that creates a string that represents an 8*8 grid, using newline characters to separate lines. At each position of the grid there is either a space or '#' character. The character should form a chessboard. When you have a program that generates this partten, define a binding size = 8 and change the program so that it works for any sizej, outputting a grid of the given width and height.*/


var strA = " # # # #";
var strB = "# # # # ";

for (let i = 0; i < 8; i++){
    console.log(strA);
    console.log(strB);
}

// Below change the code on this line

var size = 10;  // take any numbers
for (let i = 0; i < size; i++){
    console.log(strA);
    console.log(strB);
}



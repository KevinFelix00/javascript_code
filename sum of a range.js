/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers  from start up to (and including) end.
 Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55  */
// there are two ways to do this
// First way

 function range(start, end) {
    
    var { start } = { start: [] };
    for (var i = 0; i < end; i++) {
        start.push(i);
    }
    return start;
 }

// Second way: using Destruction

function range(start, end)
{
    start = [];
    var sum = 0;
    for (var i = 0; i < end; i++) {
        sum += start[i];
        start.push(i);
       
    }
    return start;
}

console.log(range(1, 10, 2));

function sum() {
numbers = [2, 13, 5, 9, 6, 10, 7, 3];
total = 0;
for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
return total;
}

console.log(sum());

/* Mordify range function to take an optional third argument that indicates the "step" value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4,3, 2] */

function range(start, end, step) {
    
    var { start, step } = { start: [], step: 2 };
    
        for (var i = 1; i < end; i += 2) {
            if (step === 2)
                start.push(i);
                else {"Write a range function that takes two arguments, start and end, and returns an array containing all the numbers  from start up to (and including) end."}
        } 
    return start;
}


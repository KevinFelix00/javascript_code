/* write a function deepEqual that takes two values and return true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual. */

function deepEqual(val1, val2) {
    
        if (val1 === val2) {   // compare the values and types
            return true;
        } else return false;
   
} 

console.log(deepEqual(1, '1'));
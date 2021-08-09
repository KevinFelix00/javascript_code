/* Define a recursive function isEven. The function should accept a single parameter(a positive, whole number) and return a Bolean.
 Test it on 50 and 75, See how it behaves on -1. Why? Can you think of a way to fix this? */

 // Example
 // Zero is even.
 // One is odd.
 // For any other number N, its evenness is the same as N-2.

 // Setup
function isEven() {
     function checkOut(){}
}
 
// Only change code below this line
function isEven(N) {
    function checkOut(N) {
       
        if (N % 2 != 0) {
            return false;
        } else { return true; }
    }
    return checkOut(50); // -1 is not an even number

}
 
console.log(isEven()); // Here the isEven is called only

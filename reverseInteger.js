// [November]/[Day 11]/[Javascript]/{reverseInteger.js}
    
    
function reverseInteger(num) {
    var digit, result = 0;

    while (num) {
        digit = num % 10;  // Get right-most digit. Ex. 123/10 => 12.3 => 3
        result = (result * 10) + digit;  // Ex. 123 => 1230 + 4 => 1234
        num = num/10|0;  // Remove right-most digit. Ex. 123 => 12.3 => 12
    }
    return result;
}

console.log(reverseInteger(123));  // 321
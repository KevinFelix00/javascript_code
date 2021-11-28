const isPrime = num => {
    for(let i = 2, s  = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false;
    return num > 1;
    
}

console.log(isPrime(0));  // false
console.log(isPrime(1));  // false
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false

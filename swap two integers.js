let a = prompt('Enter the first number');
let b = prompt('Enter the second number');

(() => {
    [a, b] = [b, a];
})();

console.log(a , b);

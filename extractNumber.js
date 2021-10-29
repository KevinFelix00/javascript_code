/* write a program that extract number from string */

var txt = 'ABC123XYZ023';

var num1 = txt.replace(/\D/g, '');

console.log(num1);
/* write a programme that sort an array string */

'use strict'
arr = ['ab', 'abcdefgh', 'xyz', 'pqrst'];
arr.sort((a, b) => b.length - a.length);   // sorting descending order

console.log(arr);  // ['abcdefgh', 'pqrst', 'xyz', 'ab']

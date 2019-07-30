'use strict';
// My original array was...
const numbers = [1, 2, 3, 4];

// After appling filter function I get the even numbers array called 'evenNumber'
let oddNumbers = numbers.filter(x => x % 2 !== 0)
console.log('Our original array was: ' + numbers);

console.log('-------------------------------------------------')

console.log('New Generated array by applying filter() is: ' + oddNumbers);

console.log('-------------------------------------------------')

// Here I took the filtered even numbers array and maped it with map() function
let multiplyiedNumber = oddNumbers.map(x => x * 2);
console.log('The doubled numbers are: ' + multiplyiedNumber);


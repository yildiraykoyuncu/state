'use strict';

// comparing arrays/objects with === is based on reference
// comparisons are true when they reference the same array/object in memory

// this comparison is false!
const huh = [1, 2, 3] === [1, 2, 3];
console.log('huh:', typeof huh, huh);

// a more involved example:
const array1 = ['hi', 'bye'];
const alsoArray1 = array1;


console.log('same array in memory');
const compareA = alsoArray1 === array1;
console.assert(compareA, 'alsoArray1 === array1');

// using either variable updates the same array
array1.push('chair');
alsoArray1.push('table');


// (clearing extra values from array1 for the next example)
array1.pop();
array1.pop();

// the next example
console.log('different arrays in memory');
const array2 = ['hi', 'bye'];

// this comparison fails even though they have the same values
const compareB = array1 !== array2;
const compareC = alsoArray1 !== array2;
console.assert(compareB, 'array1 !== array2');
console.assert(compareC, 'alsoArray1 !== array2');


// updating the second array does not effect the first
array2.push('sofa');

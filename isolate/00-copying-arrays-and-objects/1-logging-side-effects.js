'use strict';

/* Logging Side Effects

  When you log an array or object to the console
    it's displayed by reference
  this means you can't keep track of changes over time

  console logs will look like what they should be
  but when you expand the logged data
  each log will show the values from the last operation

*/

const obj = {
  a: [true],
  b: {
    x: 1
  }
};
console.log('initial', obj);

obj.a.push(false);
console.log('push to .a', obj);

obj.b.y = 2;
console.log('write to .b', obj);

obj.a.shift();
console.log('shift from .a', obj);

delete obj.b.x;
console.log('delete from .b', obj);


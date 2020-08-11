'use strict';

/* Logging Deep Clones

  to avoid confusion and to help debug your programs
  log deep clones of your arrays and objects

*/

const obj = {
  a: [true],
  b: {
    x: 1
  }
};
console.log('initial', deepClone(obj));

obj.a.push(false);
console.log('push to .a', deepClone(obj));

obj.b.y = 2;
console.log('write to .b', deepClone(obj));

obj.a.shift();
console.log('shift from .a', deepClone(obj));

delete obj.b.x;
console.log('delete from .b', deepClone(obj));


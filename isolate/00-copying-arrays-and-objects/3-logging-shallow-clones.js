'use strict';

/* Logging Shallow Clones

  using { ...obj } to clone our object will still log side-effects

*/


const obj = {
  a: [true],
  b: {
    x: 1
  }
};
console.log('initial', { ...obj });

obj.a.push(false);
console.log('push to .a', { ...obj });

obj.b.y = 2;
console.log('write to .b', { ...obj });

obj.a.shift();
console.log('shift from .a', { ...obj });

delete obj.b.x;
console.log('delete from .b', { ...obj });


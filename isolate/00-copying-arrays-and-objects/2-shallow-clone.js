'use strict';

/* Shallow Clones

  A tempting solution to copying objects/arrays is using
    [ ...arr ] or { ...obj }

  This will create a new array or object with the same entries
  but it will not create copies of the entries!

  This means that you will still have side effects

*/

const expect = chai.expect;

const obj = {
  a: [true],
  b: { x: 1 }
};
const shallowCloneObj = { ...obj };

describe('shallow cloning an object', () => {
  it('creates a new object in memory', () => {
    expect(shallowCloneObj).to.not.equal(obj);
  });
  it('but does not clone the nested array', () => {
    expect(shallowCloneObj.a).to.equal(obj.a);
  });
  it('or clone the nested object', () => {
    expect(shallowCloneObj.b).to.equal(obj.b);
  });
  it('changing the clone can change the original', () => {
    shallowCloneObj.a.push(false);
    expect(obj.a[1]).to.equal(false);
  });
});


const arr = [
  [true],
  { x: 1 }
];
const shallowCloneArr = [...arr];

describe('shallow cloned array', () => {
  it('creates a new array in memory', () => {
    expect(shallowCloneArr).to.not.equal(arr);
  });
  it('but does not clone the nested array', () => {
    expect(shallowCloneArr[0]).to.equal(arr[0]);
  });
  it('or clone the nested object', () => {
    expect(shallowCloneArr[1]).to.equal(arr[1]);
  });
  it('changing the clone can change the original', () => {
    shallowCloneArr[0].push(false);
    expect(arr[0][1]).to.equal(false);
  });
});


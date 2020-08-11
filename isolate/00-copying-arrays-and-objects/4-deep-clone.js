'use strict';

/* deepClone(any)

  in order to log reference types as you would expect
  you will need to log a complete copy of the array or object
  including a copy of every nested array or object

  this way each log will show the data you expect
  and will not be effected by later changes to the data

  deepClone is a function available in this study environment
  you can use it to create complete copies of JS data

*/

const expect = chai.expect;

describe('deepClone: creates a deep clone of common JS data types', () => {
  describe('deepClone: copies primitive types', () => {
    it('strings', () => {
      expect(deepClone('hi!')).to.equal('hi!');
    });
    it('numbers', () => {
      expect(deepClone(400)).to.equal(400);
    });
    it('booleans', () => {
      expect(deepClone(false)).to.equal(false);
    });
    it('undefined', () => {
      expect(deepClone(undefined)).to.equal(undefined);
    });
    it('null', () => {
      expect(deepClone(null)).to.equal(null);
    });
    it('NaN', () => {
      expect(deepClone(NaN)).to.be.NaN;
    });
  });
  describe('deepClone: copies arrays', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = deepClone(arg);
      expect(returned).to.not.equal(arg);
    });
    it('copies simple arrays', () => {
      expect(deepClone(['hi', 'bye'])).to.deep.equal(['hi', 'bye']);
    });
    it('copies nested arrays', () => {
      expect(deepClone([[1, 2], ['hi', 'bye']]))
        .to.deep.equal([[1, 2], ['hi', 'bye']]);
    });
    it('copies complex arrays', () => {
      expect(deepClone([true, [1, { a: 'hi' }], { x: 1, y: [true, false] }]))
        .to.deep.equal([true, [1, { a: 'hi' }], { x: 1, y: [true, false] }]);
    });
  });
  describe('deepClone: copies objects', () => {
    it('returns a new object', () => {
      const arg = {};
      const returned = deepClone(arg);
      expect(returned).to.not.equal(arg);
    });
    it('copies simple objects', () => {
      expect(deepClone({ x: 1, y: 2 })).to.deep.equal({ y: 2, x: 1 });
    });
    it('copies nested objects', () => {
      expect(deepClone({ x: { a: 1, b: 2 }, y: true }))
        .to.deep.equal({ x: { a: 1, b: 2 }, y: true });
    });
    it('copies complex objects', () => {
      expect(deepClone({ x: { a: [{ hi: 'lo' }, 'hello'], b: 2 }, y: [2, 1] }))
        .to.deep.equal({ x: { a: [{ hi: 'lo' }, 'hello'], b: 2 }, y: [2, 1] });
    });
  });
  describe('deepClone: copies circular references', () => {
    it('circular arrays', () => {
      const arr1 = [];
      const arr2 = [arr1];
      arr1.push(arr2);
      expect(deepClone(arr1)).to.deep.equal(arr1);
    });
    it('circular objects', () => {
      const obj1 = {};
      const obj2 = { a: obj1 };
      obj1.b = obj2;
      expect(deepClone(obj1)).to.deep.equal(obj1);
    });
    it('mixed circular objects/arrays', () => {
      const obj = { arr: [] };
      obj.arr.push(obj);
      expect(deepClone(obj)).to.deep.equal(obj);
    });
  });
  describe('deepClone: uses its argument correctly', () => {
    it('does not modify array arguments', () => {
      const arg = [1, 2, { a: true, b: false }, [null, 'hello']];
      deepClone(arg);
      expect(arg).to.deep.equal([1, 2, { a: true, b: false }, [null, 'hello']]);
    });
    it('does not modify object arguments', () => {
      const arg = { a: true, b: false, c: [1, 2, 3], d: { x: 'hi', y: 'bye' } };
      deepClone(arg);
      expect(arg).to.deep.equal({ a: true, b: false, c: [1, 2, 3], d: { x: 'hi', y: 'bye' } });
    });
  });
});


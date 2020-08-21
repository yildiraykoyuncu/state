'use strict';

const expect = chai.expect;

/**
 * render a paragraph with optional styling
 * @param {string} text - the paragraph text
 * @param {string[]} [classList=[]] - an array of classes to apply
 * @returns {HTMLParagraphElement} a rendered paragraph element
 */
const renderParagraph = (text, classList = []) => {

};

describe('renderParagraph: renders a paragraph with optional styling', () => {
  describe('"lorem ipsum", no classes', () => {
    const actual = renderParagraph('lorem ipsum');

    it('has tagName "P"', () => {
      expect(actual).to.have.property('tagName', 'P');
    });
    it('has text: "lorem ipsum"', () => {
      expect(actual).to.have.text('lorem ipsum');
    });
    it('has className: ""', () => {
      expect(actual).to.have.property('className', '');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });

  describe('"lorem ipsum", 3 classes', () => {
    const actual = renderParagraph('lorem ipsum', ['fancy', 'hoverable', 'emphatic']);

    it('has tagName "P"', () => {
      expect(actual).to.have.property('tagName', 'P');
    });
    it('has text: "lorem ipsum"', () => {
      expect(actual).to.have.text('lorem ipsum');
    });
    it('has className: "fancy hoverable emphatic "', () => {
      expect(actual).to.have.property('className', 'fancy hoverable emphatic ');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });

  describe('"hello user", 1 class', () => {
    const actual = renderParagraph('hello user', ['friendly']);

    it('has tagName "P"', () => {
      expect(actual).to.have.property('tagName', 'P');
    });
    it('has text: "hello user"', () => {
      expect(actual).to.have.text('hello user');
    });
    it('has className: "friendly "', () => {
      expect(actual).to.have.property('className', 'friendly ');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });

  describe('"hello user", no class', () => {
    const actual = renderParagraph('hello user', []);

    it('has tagName "P"', () => {
      expect(actual).to.have.property('tagName', 'P');
    });
    it('has text: "hello user"', () => {
      expect(actual).to.have.text('hello user');
    });
    it('has className: ""', () => {
      expect(actual).to.have.property('className', '');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });

});

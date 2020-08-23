'use strict';

const expect = chai.expect;

/**
 * render a drop-down info element
 * @param {string} caption - the title of this info drop-down
 * @param {string} mainText - the important information
 * @param {string} [id=''] - the element's id
 * @returns {HTMLDetailsElement}
 */
const renderInfo = (caption, mainText, id = '') => {
  const detailsEl = document.createElement('_');
  _;

  const summaryEl = document.createElement('_');
  _;
  _;

  const pEl = document.createElement('_');
  _;
  _;

  return detailsEl;
};

describe('renderInfo: renders some info under a caption', () => {

  describe('several colors, no id', () => {
    const actual = renderInfo('several colors', 'red, orange, green, blue.');

    it('has tagName: "DETAILS"', () => {
      expect(actual).to.have.property('tagName', 'DETAILS');
    });
    it('has id: ""', () => {
      expect(actual).to.have.property('id', '');
    });
    it('has childElementCount: 2', () => {
      expect(actual).to.have.property('childElementCount', 2);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild).to.have.property('tagName', 'SUMMARY');
      });
      it('has text: "several colors"', () => {
        expect(actualChild).to.have.text('several colors');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild).to.have.property('tagName', 'P');
      });
      it('has text: "red, orange, green, blue."', () => {
        expect(actualChild).to.have.text('red, orange, green, blue.');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    });
  });

  describe('several colors, id "colors"', () => {
    const actual = renderInfo('several colors', 'red, orange, green, blue.', 'colors');

    it('has tagName: "DETAILS"', () => {
      expect(actual).to.have.property('tagName', 'DETAILS');
    });
    it('has id: "colors"', () => {
      expect(actual).to.have.property('id', 'colors');
    });
    it('has childElementCount: 2', () => {
      expect(actual).to.have.property('childElementCount', 2);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild).to.have.property('tagName', 'SUMMARY');
      });
      it('has text: "several colors"', () => {
        expect(actualChild).to.have.text('several colors');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild).to.have.property('tagName', 'P');
      });
      it('has text: "red, orange, green, blue."', () => {
        expect(actualChild).to.have.text('red, orange, green, blue.');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    });
  });

  describe('what is javascript?, id "js"', () => {
    const actual = renderInfo('what is javascript?', 'a programming language!', 'js');

    it('has tagName: "DETAILS"', () => {
      expect(actual).to.have.property('tagName', 'DETAILS');
    });
    it('has id: "js"', () => {
      expect(actual).to.have.property('id', 'js');
    });
    it('has childElementCount: 2', () => {
      expect(actual).to.have.property('childElementCount', 2);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild).to.have.property('tagName', 'SUMMARY');
      });
      it('has text: "what is javascript?"', () => {
        expect(actualChild).to.have.text('what is javascript?');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild).to.have.property('tagName', 'P');
      });
      it('has text: "a programming language!"', () => {
        expect(actualChild).to.have.text('a programming language!');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    });
  });

});

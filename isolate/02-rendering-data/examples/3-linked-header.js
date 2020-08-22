'use strict';

const expect = chai.expect;

/**
 * renders a header with a link
 *  you can optionally configure the target
 * @param {string} text - the button's text
 * @param {string} url - the link's URL
 * @param {string} [target='_blank'] - where to open the link
 *  defaults to '_blank'
 * @returns {HTMLHeadingElement} a linked heading
 */
const linkedHeader = (text, link, target = '_blank') => {
  const h2El = document.createElement('h2');

  const aEl = document.createElement('a');
  aEl.href = link;
  aEl.target = target;
  aEl.innerHTML = text;
  h2El.appendChild(aEl);

  return h2El;
};


describe('linkedHeader: renders an anchor inside a heading', () => {

  describe('a header linked to google', () => {
    const actual = linkedHeader('google it', 'https://www.google.com/');

    it('has tagName: "H2"', () => {
      expect(actual).to.have.property('tagName', 'H2');
    });
    it('has childElementCount: 1', () => {
      expect(actual).to.have.property('childElementCount', 1);
    });
    console.dir(actual);

    describe(`first child`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "A"', () => {
        expect(actualChild).to.have.property('tagName', 'A');
      });
      it('has href: "https://www.google.com/"', () => {
        expect(actualChild).to.have.property('href', 'https://www.google.com/');
      });
      it('has target: "_blank" (default)', () => {
        expect(actualChild).to.have.property('target', '_blank');
      });
      it('has text: "google it"', () => {
        expect(actualChild).to.have.text('google it');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    });
  });

  describe('a header linked to badgers', () => {
    const actual = linkedHeader('badger x 3', 'https://badgerbadgerbadger.com/', '_self');

    it('has tagName: "H2"', () => {
      expect(actual).to.have.property('tagName', 'H2');
    });
    it('has childElementCount: 1', () => {
      expect(actual).to.have.property('childElementCount', 1);
    });
    console.dir(actual);

    describe(`first child`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "A"', () => {
        expect(actualChild).to.have.property('tagName', 'A');
      });
      it('has href: "hhttps://badgerbadgerbadger.com/"', () => {
        expect(actualChild).to.have.property('href', 'https://badgerbadgerbadger.com/');
      });
      it('has target: "_self"', () => {
        expect(actualChild).to.have.property('target', '_self');
      });
      it('has text: "badger x 3"', () => {
        expect(actualChild).to.have.text('badger x 3');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    });
  });

});

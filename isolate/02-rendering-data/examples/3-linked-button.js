'use strict';

const expect = chai.expect;

/**
 * renders a button that wrapped in an anchor
 *  you can optionally configure the target
 * @param {string} text - the button's text
 * @param {string} url - the link's URL
 * @param {string} [target='_blank'] - where to open the link
 *  defaults to '_blank'
 * @returns {HTMLAnchorElement} a linked button
 */
const linkedButton = (text, link, target = '_blank') => {
  const aEl = document.createElement('a');
  aEl.href = link;
  aEl.target = target;

  const buttonEl = document.createElement('button');
  buttonEl.innerHTML = text;
  aEl.appendChild(buttonEl);

  return aEl;
};


describe('linkedButton: renders a button inside of an anchor', () => {

  describe('a linked button element opening to google', () => {
    const actual = linkedButton('google it', 'https://www.google.com/');

    it('has tagName: "A"', () => {
      expect(actual).to.have.property('tagName', 'A');
    });
    it('has href: "https://www.google.com/"', () => {
      expect(actual).to.have.property('href', 'https://www.google.com/');
    });
    it('has target: "_blank" (default)', () => {
      expect(actual).to.have.property('target', '_blank');
    });
    it('has childElementCount: 1', () => {
      expect(actual).to.have.property('childElementCount', 1);
    });
    console.dir(actual);

    describe(`first child`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "BUTTON"', () => {
        expect(actualChild).to.have.property('tagName', 'BUTTON');
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

  describe('a linked button element opening to badgers', () => {
    const actual = linkedButton('badger x 3', 'https://badgerbadgerbadger.com/', '_self');

    it('has tagName: "A"', () => {
      expect(actual).to.have.property('tagName', 'A');
    });
    it('has href: "hhttps://badgerbadgerbadger.com/"', () => {
      expect(actual).to.have.property('href', 'https://badgerbadgerbadger.com/');
    });
    it('has target: "_self"', () => {
      expect(actual).to.have.property('target', '_self');
    });
    it('has childElementCount: 1', () => {
      expect(actual).to.have.property('childElementCount', 1);
    });
    console.dir(actual);

    describe(`first child`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "BUTTON"', () => {
        expect(actualChild).to.have.property('tagName', 'BUTTON');
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

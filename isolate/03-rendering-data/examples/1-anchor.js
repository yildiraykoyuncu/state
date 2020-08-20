'use strict';

const expect = chai.expect;

/**
 * renders an anchor element with given text & URL
 *  you can optionally configure the target
 * @param {string} text - the link text
 * @param {string} url - the link's URL
 * @param {string} [target='_blank'] - where to open the link
 *  defaults to '_blank'
 * @returns {HTMLAnchorElement} a rendered anchor element
 */
const renderAnchor = (text, url, target = '_blank') => {
  const aEl = document.createElement('a');
  aEl.href = url;
  aEl.target = target;
  aEl.innerHTML = text;

  return aEl;
};

describe('renderAnchor: renders a DOM anchor element', () => {

  describe('open google in a new tab (default target)', () => {
    const actual = renderAnchor('google it', 'https://www.google.com/');

    it('has tagName: "A"', () => {
      expect(actual).to.have.property('tagName', 'A');
    });
    it('has text: "google it"', () => {
      expect(actual).to.have.text('google it');
    });
    it('has href: "https://www.google.com/"', () => {
      expect(actual).to.have.property('href', 'https://www.google.com/');
    });
    it('has target: "_blank" (default)', () => {
      expect(actual).to.have.property('target', '_blank');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });

  describe('open a pre-defined search in a new tab', () => {
    const actual = renderAnchor('lmgtfy', 'https://lmgtfy.com/?q=let+me+google+that+for+you&s=d', '_blank');

    it('has tagName: "A"', () => {
      expect(actual).to.have.property('tagName', 'A');
    });
    it('has text: "lmgtfy"', () => {
      expect(actual).to.have.text('lmgtfy');
    });
    it('has href: "https://lmgtfy.com/?q=let+me+google+that+for+you&s=d"', () => {
      expect(actual).to.have.property('href', 'https://lmgtfy.com/?q=let+me+google+that+for+you&s=d');
    });
    it('has target: "_blank"', () => {
      expect(actual).to.have.property('target', '_blank');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });

  describe('redirect to the HYF promo clip', () => {
    const actual = renderAnchor('HYF Belgium', 'https://www.youtube.com/watch?v=oHg5SJYRHA0', '_self');

    it('has tagName: "A"', () => {
      expect(actual).to.have.property('tagName', 'A');
    });
    it('has text: "HYF Belgium"', () => {
      expect(actual).to.have.text('HYF Belgium');
    });
    it('has href: "https://www.youtube.com/watch?v=oHg5SJYRHA0"', () => {
      expect(actual).to.have.property('href', 'https://www.youtube.com/watch?v=oHg5SJYRHA0');
    });
    it('has target: "_self"', () => {
      expect(actual).to.have.property('target', '_self');
    });
    it('has childElementCount: 0', () => {
      expect(actual).to.have.property('childElementCount', 0);
    });
    console.dir(actual);
  });
});

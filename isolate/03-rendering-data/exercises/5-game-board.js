'use strict';

const expect = chai.expect;

/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrOfArrs - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
const renderGameBoard = (arrOfArrs) => {
 
};


describe('renderGameBoard: renders a list of user screen names and real names', () => {

  describe('tictactoe: X won on the middle column', () => {
    const boardData = [
      ['O', 'X', 'X'],
      ['X', 'X', 'O'],
      ['O', 'X', 'O'],
    ];
    const actual = renderGameBoard(boardData);

    testGameBoard(actual, boardData);
  });

  describe('empty mancala board', () => {
    const boardData = [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
    ];
    const actual = renderGameBoard(boardData);

    testGameBoard(actual, boardData);
  });

  describe('Play Ball!', () => {
    const boardData = [
      ['p', 'l', 'a', 'y'],
      ['b', 'a', 'l', 'l'],
    ];
    const actual = renderGameBoard(boardData);

    testGameBoard(actual, boardData);
  });

});



function testGameBoard(actual, boardData) {
  it('has tagName: "TABLE"', () => {
    expect(actual).to.have.property('tagName', 'TABLE');
  });
  it(`has childElementCount: ${boardData.length}`, () => {
    expect(actual).to.have.property('childElementCount', boardData.length);
  });
  console.dir(actual);
  for (let i = 0; i < boardData.length; i++) {
    describe(`.children[${i}]`, () => {
      const row = boardData[i];
      const actualChild = actual.children[i];
      it('has tagName: "TR"', () => {
        expect(actualChild).to.have.property('tagName', 'TR');
      });
      it(`has childElementCount: ${row.length}`, () => {
        expect(actualChild).to.have.property('childElementCount', row.length);
      });
      console.dir(actualChild);
      for (let j = 0; j < row.length; j++) {
        describe(`.children[${j}]`, () => {
          const filler = row[j];
          const actualChildChild = actualChild.children[j];
          it('has tagName: "TD"', () => {
            expect(actualChildChild).to.have.property('tagName', 'TD');
          });
          it(`has text: "${filler}"`, () => {
            expect(actualChildChild).to.have.text(filler);
          });
          it(`has childElementCount: 0`, () => {
            expect(actualChildChild).to.have.property('childElementCount', 0);
          });
          console.dir(actualChildChild);
        }, true);
      }
    }, true);
  }
}

'use strict';

const expect = chai.expect;

/* Provide correct input

  this exercises doesn't have any code to write, fix, or complete!

  instead, all you need to do is provide input
  the challenge is to provide the right input

  throughout the script there will be several state checks
  these are it() tests to test the current state

*/

// --- initialize the application ---

const state = {
  favorite: -1,
  words: []
};
const stateLog = [
  { state: deepClone(state) }
];

// --- accept user input ---
let acceptingInput = true;
while (acceptingInput) {
  const nextInput = prompt('enter a word, or click "cancel" to finish');
  const addingWordLog = {
    action: 'add word',
    input: nextInput
  };
  stateLog.push(addingWordLog);
  if (nextInput !== null) {
    state.words.push(nextInput);
    addingWordLog.state = deepClone(state);
  }
  else {
    acceptingInput = false;
  }
};


// --- provide the correct input to pass this test ---
it('the user entered "a", "b", "c"', () => {
  const expected = {
    favorite: -1,
    words: ['a', 'b', 'c']
  };
  expect(state).to.deep.equal(expected);
});


const renderedWords = state.words.reduce((msg, next, index) => {
  return `${msg}\n${index}. ${next}`;
}, '');
const message = `enter the index of your favorite word is: ${renderedWords}`;
const favoriteInput = prompt(message);
const favoriteIndex = Number(favoriteInput);

const favoriteLog = {
  action: 'set favorite',
  input: favoriteInput,
  index: favoriteIndex,
};
stateLog.push(favoriteLog);

if (Number.isNaN(favoriteIndex)) {
  const message = `"${favoriteInput}" is not a number`;
  alert(message);
  // update the log
  favoriteLog.invalid = message;
}
else if (favoriteIndex >= state.words.length || favoriteIndex < 0) {
  const message = `${favoriteInput} is out of range`;
  alert(message);
  // update the log
  favoriteLog.invalid = message;
}
else {
  state.favorite = favoriteIndex;
  const favoriteWord = state.words[state.favorite];
  alert(`your favorite word:\n ${favoriteIndex}. ${favoriteWord}`);
  // update the log
  favoriteLog.state = deepClone(state);
}

// --- provide the correct user input to pass this test ---
it('the user prefers "b"', () => {
  const expected = {
    favorite: 1,
    words: ['a', 'b', 'c']
  };
  expect(state).to.deep.equal(expected);
});

console.log(stateLog);

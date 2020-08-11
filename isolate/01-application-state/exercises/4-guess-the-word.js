'use strict';

/* Guess the Word

  This is a two-player game
  one player enters a secret word and a hint
  the other player needs to guess the word

  You need to do is replace the _'s
  The rest of the code works

  Be sure to experiment with the demo!
  After each time you use the demo:
  1. open your console
  2. read through the log of your interactions

*/

// --- initialize the state and log ---

const state = {
  word: '',
  hint: '',
  guesses: [],
};

const gameLog = [
  { state: deepClone(state) }
];

// --- declare view function ---

/**
 * interprets the target word against the letters that have been guessed
 * the solution with a _ in place of all letters that have not been guessed
 * @param {string} solution - the target word
 * @param {string[]} guessed - an array of single letters
 * @returns {string} the solution with _s for letters that have not been guessed
 */
const renderGuesses = (solution, guessed) => {
  const guess = solution.split('')
    .map((character) => {
      return guessed.includes(character) ? character : '_ ';
    })
    .join('');
  return guess;
};

// --- begin main program ---

// initial instructions
const initialMessage = 'This is a two player game.  \n'
  + 'One person enters a word, the other needs to guess it. \n\n'
  + 'you may enter "exit" at any point to exit the game';
alert(initialMessage);

// one-way flag: once set the false the game ends
let stillPlaying = true;

// first player enters the word to guess
while (stillPlaying) {

  const setWordMessage = 'player 1: \nenter a word for the other player to guess:'
  const userInput = prompt(setWordMessage);

  if (userInput === 'exit') {
    alert('thank you for playing. \nhave a nice day');
    stillPlaying = false;
    gameLog.push({ action: 'exit' });
    break;
  }

  const setWordLog = {
    action: 'set word',
    userInput
  };
  gameLog.push(setWordLog);

  if (_) {
    const invalidMessage = 'there is not escape!';
    alert(invalidMessage);
    setWordLog.invalid = invalidMessage;
    continue;
  }
  if (_) {
    const invalidMessage = 'a word has at least one letter';
    alert(invalidMessage);
    setWordLog.invalid = invalidMessage;
    continue;
  }
  if (!/^[a-zA-Z]+$/.test(userInput)) {
    const message = `"${userInput}" should contain only letters`;
    alert(message);
    setWordLog.invalid = message;
    continue;
  }

  const confirmed = confirm(`are you sure you want to use "${userInput}" ?`);
  setWordLog.confirmed = confirmed;

  if (confirmed) {
    state.word = userInput;
    setWordLog.state = deepClone(state);
    break;
  }

}


// first player enters a hint
while (stillPlaying) {
  const userInput = prompt('player 1: \nenter a hint to help the other player guess your word:');

  if (_) {
    alert('thank you for playing. \nhave a nice day');
    stillPlaying = false;
    gameLog.push({ action: 'exit' });
    break;
  }

  const setHintLog = {
    action: 'set hint',
    userInput
  };
  gameLog.push(setHintLog);

  if (_) {
    const invalidMessage = 'there is not escape!';
    alert(invalidMessage);
    setHintLog.invalid = invalidMessage;
    continue;
  }
  if (_) {
    const invalidMessage = 'a hint has at least one letter';
    alert(invalidMessage);
    setHintLog.invalid = invalidMessage;
    continue;
  }

  const confirmed = confirm(`are you sure you this is your hint?\n"${userInput}"`);
  setHintLog.confirmed = confirmed;

  if (_) {
    state.hint = userInput;
    setHintLog.state = deepClone(state);
    break;
  }
}


// second player tries to guess the word
while (stillPlaying) {
  // read from state to determine important information for the game:
  const guess = renderGuesses(state.word, state.guesses);
  const remainingGuesses = (state.word.length * 2) - state.guesses.length;
  // https://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string
  const remainingBlanks = (guess.match(/_/g) || []).length;

  // render this information for the user
  const message = `player 2: \n${remainingBlanks} characters left to guess: \n\n  ${guess}\n`
    + '\n'
    + `you have ${remainingGuesses} guesses left: \n\n  ${state.guesses.join(', ')}\n`
    + '\n'
    + `hint: "${state.hint}"\n`
    + '\n'
    + 'click "cancel" to give up\n'
    + 'enter "exit" to leave the game (without ever knowing the word!)\n';
  const userInput = prompt(message);

  // check for early-exit conditions
  if (_) {
    alert('thank you for playing. \nhave a nice day');
    stillPlaying = false;
    gameLog.push({ action: 'exit' });
    break;
  }
  if (_) {
    const giveUpLog = {
      action: 'give up'
    };
    gameLog.push(giveUpLog);

    const confirmGiveUpMessage = `are you sure you want to give up!?`;
    const confirmed = confirm(confirmGiveUpMessage);
    giveUpLog.confirmed = confirmed;

    if (_) {
      alert(`you give up!!\n\nthe word was: \n\n  "${state.word}" \n\nyou'd guessed: \n\n  ${guess}`);
      stillPlaying = false;
      break;
    }

    continue;
  }

  // evaluate and log the user's guess
  const guessLog = {
    action: 'guess',
    userInput
  };
  gameLog.push(guessLog);

  // exit this input cycle if the user input is invalid
  if (userInput._ !== _) {
    const invalidMessage = `"${userInput}" is not 1 character`;
    alert(invalidMessage);
    guessLog.invalid = invalidMessage;
    continue;
  }
  if (state.guesses.includes(_)) {
    const invalidMessage = `"${userInput}" has already been guessed`;
    alert(invalidMessage);
    guessLog.invalid = invalidMessage;
    continue;
  }
  if (!/^[a-zA-Z]+$/._(userInput)) {
    const invalidMessage = `"${userInput}" is not a letter`;
    alert(invalidMessage);
    guessLog.invalid = invalidMessage;
    continue;
  }

  // add the guess to state if it is valid
  state.guesses.push(userInput);
  // log the state change
  guessLog.state = deepClone(state);

  // read from state to determine:
  //  if the game is finished
  //  if the user won or lost
  const newGuess = renderGuesses(state.word, state.guesses);

  // does the generated guess match the target word?
  //  win!
  if (_.toLowerCase() === _._.toLowerCase()) {
    const winMessage = `WIN! \n\n`
      + `You guessed the word "${state.word}" in ${state._.length} guesses.\n\n`
      + `  ${state.guesses.join(', ')}`
    alert(winMessage);

    // log the final state and if the game was won or lost
    gameLog.push({
      win: true,
      state: deepClone(state)
    });
    break;
  }
  // did the player use up all of their guesses?
  //  no win :(
  if (state.guesses.length === (state.word.length * 2)) {
    const loseMessage = `lose :( \n\nthe word was: \n\n  "${state._}" \n\nyou'd guessed: \n\n  ${newGuess}\n\n`
      + `  ${state._.join(', ')}`;
    alert(loseMessage);

    // log the final state and if the game was won or lost
    gameLog.push({
      win: false,
      state: deepClone(state)
    });
    break;
  }
};

console.log(gameLog);

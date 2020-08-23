'use strict';

/* Logging User Interactions

  To understand application development, you need to understand state
  State changes over time as users interact with it

  You can understand and debug your apps by storing a record of all
  - state changes (how did state change after each interaction?)
    you learned how this worked in the previous example
    this is the data that is interesting for users
  - user interactions (what did they try to do? what input did they provide?)
    this is data that is interesting for developers, and not users
    things like: local variables, which handler was called, ...


  This is called "logging"

  Clear logs are like a debugger for the big-picture of your project
  the debugger lets you step through each individual step of your application
    - Implementation
    this very specific view helps to fix specific bugs
    but can make it hard to understand the big picture of your application
  logging changes to state will help you to see the big picture
    - Behavior
    seeing how the application progresses over longer period of times
    with the clutter of extra variables removed for clarity

  Web applications are all about user interactions
  you can plan your code, but you can't plan what a user will actually do
  keeping a log of all user actions, user inputs, and related state changes
  you can see what inputs or actions result in bugs
  this information is necessary to debug more complicated applications

*/

// --- initialize the application ---

// this variable stores useful data for the user
//  it is the state
const state = {
  favorite: -1,
  words: []
};
// this variable stores useful data for developers
//  it is a log of all user interactions and state changes
//  logs like this one are incredibly helpful for debugging
const stateLog = [
  { state: deepClone(state) }
];

// --- function to render array of words to a list ---

/**
 * renders words in an array into a single formatted list string
 * @param {string[]} arrOfStrings - array of words to render
 * @returns {string} rendered list of words
 */
const renderList = (arrOfStrings) => {
  const addListEntry = (msg, next, index) => {
    return `${msg}\n${index}. ${next}`;
  };
  return arrOfStrings.reduce(addListEntry, '');
};

// --- the user adds as many words as they like ---

while (true) {
  // render all words saved in state into a user-friendly list
  const renderedWords = renderList(state.words);
  // this variable stores user input
  //  the data it stores may become part of state
  const nextInput = prompt(`enter a word, or click "cancel" to finish. \n\nwords so far: \n${renderedWords}`);
  const addWordLog = {
    action: 'add word',
    input: nextInput
  };
  stateLog.push(addWordLog);

  if (nextInput === null) {
    // make suer the user has input at least one word
    if (state.words.length === 0) {
      alert('you must enter at least one word');
      continue;
    }
    // exit the input loop
    break;
  }

  if (nextInput.length === 0) {
    const message = 'words must have at least one letter';
    alert(message);
    addWordLog.invalid = message;
    continue;
  }

  // add nextInput to state
  state.words.push(nextInput);
  // log the state change
  addWordLog.state = deepClone(state);
};


// --- a user indicates their favorite word ---

while (true) {
  // renderedWords stores part of state rendered to a string
  const renderedWords = renderList(state.words);
  // stores a full rendered message for the user
  const message = `enter the index of your favorite word: ${renderedWords}`;
  // stores raw user input
  const userInput = prompt(message);
  // stores processed user input
  //  this variable will be used to manage program control flow
  const favoriteIndex = Number(userInput);

  // create new log entry
  const favoriteLog = {
    action: 'set favorite',
    input: userInput,
    index: favoriteIndex
  };
  // add log entry to stateLog
  //  it will be updated by reference!
  stateLog.push(favoriteLog);

  if (Number.isNaN(favoriteIndex)) {
    // the user entered an invalid index, do not update state
    const message = `"${userInput}" is not a number`;
    alert(message);
    // log the user interaction
    favoriteLog.invalid = message;
    continue;
  }
  if (favoriteIndex >= state.words.length || favoriteIndex < 0) {
    // the user entered an out-of-range index, do not update state
    const message = `${userInput} is out of range`;
    alert(message);
    // log the user interaction
    favoriteLog.invalid = message;
    continue;
  }
  // use that word to update state.favorite
  state.favorite = favoriteIndex;

  // access the selected word from state.words
  const favoriteWord = state.words[state.favorite];
  alert(`your favorite word:\n ${favoriteIndex}. ${favoriteWord}`);

  // log user interaction and state change
  favoriteLog.state = deepClone(state);

  // the user has selected a valid index, break from this input loop
  break;
}

// print the stateLog:
//  all user interactions
//  all state changes
console.log(stateLog);

'use strict';

/* Program State vs. Application State

  So far you have learned to trace and inspect program state
  Program state is all of the data available to JavaScript, they include:
    iteration variables for loops
    temporary variables of any sort
    ... any local variable you use to create your program

  Application state is similar, but more specific
  it is the data in memory that is directly related to your user experience
    the difference is practical, not technical
  Application state is part of program state
    but not all of program state is part of application state

  Application state is generally stored in an array or an object
    data in that array/object is important for the user experience
    other data may be necessary for the program, but the user interact with it

  Something you will need to learn is good habits around how to use program state
    when should you read from state?
    when should you modify state?
*/

// --- initialize the application ---

// this variable stores useful data for the user
//  it is the application state
const state = {
  favorite: -1,
  words: []
};
console.log('initial state:', deepClone(state));

// --- add random strings to state ---

// this variable is used by the program to manage control flow
//  it is part of program state
//  it is not part of application state
const range = Math.ceil(Math.random() * 10);

for (let i = 0; i < range; i++) {
  // this variable stores the random string
  //  the data it stores may become part of application state
  const randomWord = Math.random().toString(36).substring(7);
  alert(`entering random string: "${randomWord}"`);
  // add nextInput to program state
  state.words.push(randomWord);
};


// --- randomly select a saved word ---

// the following variables will not become part of application state
// they are part of program state, but not application state

// renderedWords stores part of state rendered to a string
const renderedWords = state.words.reduce((msg, next, index) => {
  return `${msg}\n${index}. ${next}`;
}, '');
// stores a full rendered message
const message = `these are the random words: ${renderedWords}`;
alert(message);
// stores the random array index
const favoriteIndex = Math.floor(Math.random() * range);
alert(`favorite index: ${favoriteIndex}`);

// use the random index to update state.favorite
state.favorite = favoriteIndex;
// access the selected word from state.words
//  the favoriteWord variable is not part of application state!
//  it stores a value from state for use in your program
//  but is not part of the state object
const favoriteWord = state.words[state.favorite];

alert(`favorite word:\n ${state.favorite}. ${favoriteWord}`);

console.log('final state:', state);

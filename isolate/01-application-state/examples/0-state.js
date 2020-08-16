'use strict';

/* State

  The term "State" has a specific meaning in JS Web Development
  It is a data structure (object, array ...) that collects data of interest to the User
  This data might be names, images, todos, messages, ... it depends on your project!

  Something you will need to learn is good habits around how to use state
    when should you read from state?
    when should you modify state?
*/

// --- initialize the application ---

// this variable and it's object stores useful data for the user
//  it is the state
const state = {
  favorite: -1,
  words: []
};
console.log('initial state:', deepClone(state));

// --- add random strings to state ---

// this variable is used by the program to manage control flow
//  it's data is not part of state
const range = Math.ceil(Math.random() * 10);

for (let i = 0; i < range; i++) {
  // this variable stores the random string
  //  the data it stores will become part of state
  //  but the variable still isn't!
  const randomWord = Math.random().toString(36).substring(7);
  alert(`entering random string: "${randomWord}"`);
  // add nextInput to state
  state.words.push(randomWord);
};


// --- randomly select a saved word ---

// the following data will not become part of state
//  they read from state and RENDER state
//  rendering is when you take data and make it readable for a user

// renderedWords stores the saved words rendered into a string
const renderedWords = state.words.reduce((msg, next, index) => {
  return `${msg}\n${index}. ${next}`;
}, '');
// stores a full rendered message
const message = `these are the random words: ${renderedWords}`;
alert(message);

// generate a random index in the array
const favoriteIndex = Math.floor(Math.random() * range);
alert(`favorite index: ${favoriteIndex}`);

// use the random index to update state.favorite
state.favorite = favoriteIndex;
// access the selected word from state.words
//  the favoriteWord variable is not actually part of state!
//  it stores a value from the state object for use in your program
//  but the variable is not part of the state object
const favoriteWord = state.words[state.favorite];

alert(`favorite word:\n ${state.favorite}. ${favoriteWord}`);

console.log('final state:', state);

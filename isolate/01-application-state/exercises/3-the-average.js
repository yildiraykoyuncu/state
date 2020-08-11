'use strict';

/* The Average

  this program accepts numbers from the user
  when the user has finished inputting numbers
  the program displays the average and the list of numbers

  All you need to do is replace the _'s
  All the rest of the code works

  Be sure to experiment with the demo!
  After each time you use the demo:
  1. open your console
  2. read through the log of your interactions

*/

// --- initialize the application's data ---

const state = {
  numbers: [],
  average: 0
};
const stateLog = [
  { state: deepClone(state) }
];

// --- logic function (this works) ---

/**
 * computes the average of all numbers in an array
 * if the array has no entries, it returns 0
 * @param {number[]} arrOfNumbers - an array of numbers to average
 * @returns {number} the average of all numbers in the array
 */
const average = (arrOfNumbers) => {
  if (arrOfNumbers.length === 0) {
    return 0;
  }
  const numberOfNumbers = arrOfNumbers.length;
  const sum = arrOfNumbers.reduce((sum, next) => sum + next);
  const average = sum / numberOfNumbers;
  return average;
};

// --- collect numbers to average ---

// collect input until the user cancels a prompt
while (true) {
  const nextInput = prompt('enter a number to include in the average \n\nclick "cancel" to finish inputting numbers');

  // create new log entry
  const inputLog = {
    action: 'input number',
    input: nextInput
  };
  // push entry into stateLog
  //  it will be updated by reference!
  stateLog.push(inputLog);

  if (_ || _) {
    // nothing more to log
    // exit the for loop, no more user input to collect
    break;
  }

  const nextNumber = Number(nextInput);
  // log the number
  inputLog.number = nextNumber;

  if (_) {
    // the user input an invalid number
    const message = `"${nextInput}" is not valid number`;
    alert(message);

    // log the invalid input
    //   did not update state, no need to log it
    inputLog.invalid = message;
    continue;
  }

  // the user input a valid number
  //  add the number to state
  state._.push(nextNumber);
  //  update the average in state
  state._ = average(state.numbers);

  // log the new state
  inputLog.state = deepClone(state);

};


// render the final state for the user

// read from state to find the average
const firstLine = `the average is: ${state._}`;

// read from state to render the list of numbers
const renderedNumbers = state._.reduce((list, nextNum) => {
  return `${list}\n: ${nextNum}`;
}, '');
const fullMessage = firstLine + renderedNumbers;
alert(fullMessage);

// add the final state to the stateLog
stateLog.push({ state: deepClone(state) });
// log the history of interactions and state to the console
console.log(stateLog);

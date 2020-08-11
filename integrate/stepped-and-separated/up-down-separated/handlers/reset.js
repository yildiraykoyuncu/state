function resetHandler() {
  // reset state
  numbers.current = 0;
  numbers.past = [];

  // reset UI
  document.getElementById('current-number').innerHTML = numbers.current;

  // log user interaction
  const copiedState = deepClone(numbers);
  log.push({
    handler: 'reset',
    numbers: copiedState
  });
}


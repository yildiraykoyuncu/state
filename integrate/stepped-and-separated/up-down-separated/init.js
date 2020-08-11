window.onload = () => {
  debugger;
  // log initial state
  const copiedState = deepClone(numbers);
  log.push({ initialNumbers: copiedState });

  // render initial UI from state
  document.getElementById('current-number').innerHTML = numbers.current;
}

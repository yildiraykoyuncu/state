const validateContainer = document.createElement('div');
validateContainer.style = 'text-align:center;';

const monkeyTest = document.createElement('button');
monkeyTest.innerHTML = 'unleash the gremlins';
const buttonClickingGremlin = ({ logger, randomizer, window }) => {
  return () => {
    const buttons = document.querySelectorAll('button');
    if (buttons.length > 0) {
      const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
      randomButton.dispatchEvent(new Event('click'));
    }
  };
};
monkeyTest.onclick = () => {
  document.body.removeChild(validateContainer);
  const horde = gremlins.createHorde({
    species: [
      gremlins.species.formFiller(),
      gremlins.species.typer(),
      gremlins.species.clicker(),
      buttonClickingGremlin,
      gremlins.species.scroller(),
    ],
    strategies: [gremlins.strategies.distribution({
      distribution: [
        0.24,
        0.25,
        0.25,
        0.15,
        0.01,
      ],
      delay: 10,
      nb: 200,
    })]
  });
  horde.unleash();
  setTimeout(() => {
    horde.stop();
    document.body.insertBefore(validateContainer, document.body.firstChild);
  }, 2000);
};
validateContainer.appendChild(monkeyTest);

document.body.insertBefore(validateContainer, document.body.firstChild);

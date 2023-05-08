const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const resetButton = document.querySelector('[data-key="reset"]');
const counter = document.querySelector('[data-key="number"]');
let counterValue = 0;
const MIN = -1000;
const MAX = 1000;

// This function handles the click event on the subtract button
const subtractHandler = () => {
  if (counterValue > MIN) {
    counterValue--;
    counter.value = counterValue;
    add.disabled = false;
  }
  if (counterValue === MIN) {
    subtract.disabled = true;
  }
};

// This function handles the click event on the add button
const addHandler = () => {
  if (counterValue < MAX) {
    counterValue++;
    counter.value = counterValue;
    subtract.disabled = false;
  }
  if (counterValue === MAX) {
    add.disabled = true;
  }
};

// This function resets the counter to zero and enables both buttons
const resetCounter = () => {
  counterValue = 0;
  counter.value = counterValue;
  alert('Counter has been reset!');
  subtract.disabled = false;
  add.disabled = false;
};

// Attach click event listeners to each button that call the appropriate function
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
resetButton.addEventListener('click', resetCounter);


// Select the reset button element
const resetButton = document.querySelector('[data-key="reset"]');
const resetCounter = () => {
    counterValue.value = 0;
    alert('Counter has been reset!');
  
    // Re-enable the buttons
    subtract.disabled = false;
    add.disabled = false;
  };

// Select the counter value element
const counterValue = document.querySelector('.counter__value');

// Define the reset function


// Add an event listener to the reset button
resetButton.addEventListener('click', resetCounter);
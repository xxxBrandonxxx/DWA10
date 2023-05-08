export const subtract = document.querySelector('[data-key="subtract"]');
      const add = document.querySelector('[data-key="add"]');
      const resetButton = document.querySelector('[data-key="reset"]');
      const counter = document.querySelector('[data-key="number"]');
      let currentValue = 0;
      const MIN = -1000;
      const MAX = 1000;

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
      resetButton.addEventListener('click', () => {
        resetCounter();
      });
      
      const resetCounter = () => {
        counter.value = 0;
        alert('Counter has been reset!');
        subtract.disabled = false;
        add.disabled = false;
      };
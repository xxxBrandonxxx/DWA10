const subtract = document.querySelector('[data-key="subtract"]');
      const add = document.querySelector('[data-key="add"]');
      const resetButton = document.querySelector('[data-key="reset"]');
      const counter = document.querySelector('[data-key="number"]');
      let counterValue = 0;
      const MIN = -10;
      const MAX = 10;

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

      const resetCounter = () => {
        counterValue = 0;
        counter.value = counterValue;
        alert('Counter has been reset!');
        subtract.disabled = false;
        add.disabled = false;
      };

      subtract.addEventListener('click', subtractHandler);
      add.addEventListener('click', addHandler);
      resetButton.addEventListener('click', resetCounter);
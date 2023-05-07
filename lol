// this is all 3 my files in one code snippet scripts.js inputset,js and resetButton.js

// Scripts.js:
// // Set the amount to increment or decrement the counter
// const stepAmount = 1;

// // Set the initial value of the counter
// let currentValue = 0;

// // Define the function to handle the click on the subtract button
// const subtractHandler = () => {
//     // Calculate the new value of the counter by subtracting the step amount
//     const newValue = currentValue - stepAmount;

//     // If the new value is less than the minimum number, exit the function and do nothing
//     if (newValue < MIN_NUMBER) {
//         return;
//     }

//     // Update the current value of the counter
//     currentValue = newValue;

//     // Update the value of the HTML element that displays the counter value
//     number.value = currentValue;

//     // If the add button was previously disabled, re-enable it
//     if (add.disabled === true) {
//         add.disabled = false;
//     }

//     // If the current value is less than or equal to the minimum number, disable the subtract button
//     if (currentValue <= MIN_NUMBER) {
//         subtract.disabled = true;
//     }
// };

// // Define the function to handle the click on the add button
// const addHandler = () => {
//     // Calculate the new value of the counter by adding the step amount
//     const newValue = currentValue + stepAmount;

//     // If the new value is greater than the maximum number, exit the function and do nothing
//     if (newValue > MAX_NUMBER) {
//         return;
//     }

//     // Update the current value of the counter
//     currentValue = newValue;

//     // Update the value of the HTML element that displays the counter value
//     number.value = currentValue;

//     // If the subtract button was previously disabled, re-enable it
//     if (subtract.disabled === true) {
//         subtract.disabled = false;
//     }

//     // If the current value is greater than or equal to the maximum number, disable the add button
//     if (currentValue >= MAX_NUMBER) {
//         add.disabled = true;
//     }
// };

// Inputset.js:
// // Select elements from the DOM
// const number = document.querySelector('[data-key="number"]');
// const subtract = document.querySelector('[data-key="subtract"]');
// const add = document.querySelector('[data-key="add"]');
// const minInput = document.querySelector('[data-key="min"]');
// const maxInput = document.querySelector('[data-key="max"]');
// const setMinButton = document.querySelector('[data-key="set-min-button"]');
// const setMaxButton = document.querySelector('[data-key="set-max-button"]');

// // Initialize variables
// let MIN_NUMBER = parseInt(minInput.value);
// let MAX_NUMBER = parseInt(maxInput.value);
// const stepAmount = 1;
// let currentValue = 0;

// // Validate min and max inputs
// const validateInputs = () => {
//     let min = parseInt(minInput.value);
//     let max = parseInt(maxInput.value);

//     if (min >= 0) {
//         minInput.value = "";
//         throw new Error("Sorry, only negative numbers are allowed for the minimum value.");
//     }

//     if (max <= 0) {
//         maxInput.value = "";
//         throw new Error("Sorry, only positive numbers are allowed for the maximum value.");
//     }

//     if (min > max) {
//         minInput.value = "";
//         maxInput.value = "";
//         throw new Error("Sorry, the minimum value cannot be greater than the maximum value.");
//     }

//     MIN_NUMBER = min;
//     MAX_NUMBER = max;
// };

// // Handle subtract button click event
// const subtractHandler = () => {
//     const newValue = currentValue - stepAmount;
//     if (newValue < MIN_NUMBER) {
//         return;
//     }

//     currentValue = newValue;
//     number.value = currentValue;

//     if (add.disabled === true) {
//         add.disabled = false;
//     }

//     if (currentValue <= MIN_NUMBER) {
//         subtract.disabled = true;
//     }
// };

// // Handle add button click event
// const addHandler = () => {
//     const newValue = currentValue + stepAmount;
//     if (newValue > MAX_NUMBER) {
//         return;
//     }

//     currentValue = newValue;
//     number.value = currentValue;

//     if (subtract.disabled === true) {
//         subtract.disabled = false;
//     }

//     if (currentValue >= MAX_NUMBER) {
//         add.disabled = true;
//     }
// };

// // Handle set min button click event
// setMinButton.addEventListener('click', () => {
//     try {
//         validateInputs();
//         if (currentValue < MIN_NUMBER) {
//             currentValue = MIN_NUMBER;
//             add.disabled = false;
//         }
//     } catch (error) {
//         alert(error.message);
//     }
// });

// // Handle set max button click event
// setMaxButton.addEventListener('click', () => {
//     try {
//         validateInputs();
//         if (currentValue > MAX_NUMBER) {
//             currentValue = MAX_NUMBER;
//             subtract.disabled = false;
//         }
//     } catch (error) {
//         alert(error.message);
//     }
// });

// // Add event listeners to buttons
// subtract.addEventListener('click', subtractHandler);
// add.addEventListener('click', addHandler);

// resetButton.js:const subtract = document.querySelector('[data-key="subtract"]');
// const add = document.querySelector('[data-key="add"]');
// const resetButton = document.querySelector('[data-key="reset"]');
// const counter = document.querySelector('[data-key="number"]');
// let counterValue = 0;
// const MIN = -1000;
// const MAX = 1000;

// const subtractHandler = () => {
//     if (counterValue > MIN) {
//         counterValue--;
//         counter.value = counterValue;
//         add.disabled = false;
//     }
//     if (counterValue === MIN) {
//         subtract.disabled = true;
//     }
// };

// const addHandler = () => {
//     if (counterValue < MAX) {
//         counterValue++;
//         counter.value = counterValue;
//         subtract.disabled = false;
//     }
//     if (counterValue === MAX) {
//         add.disabled = true;
//     }
// };
// resetButton.addEventListener('click', () => {
//     currentValue = resetCounter(currentValue);
//     currentValue = 0
// });

// const resetCounter = (currentValue) => {
//     counter.value = 0;
//     alert('Counter has been reset!');
//     subtract.disabled = false;
//     add.disabled = false;
//     return 0;
// };



// subtract.addEventListener('click', subtractHandler);
// add.addEventListener('click', addHandler);
// resetButton.addEventListener('click', resetCounter);
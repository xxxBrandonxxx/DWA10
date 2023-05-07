
// Set the amount to increment or decrement the counter
const stepAmount = 1;

// Set the initial value of the counter
let currentValue = 0;

// Define the function to handle the click on the subtract button
const subtractHandler = () => {
    // Calculate the new value of the counter by subtracting the step amount
    const newValue = currentValue - stepAmount;

    // If the new value is less than the minimum number, exit the function and do nothing
    if (newValue < MIN_NUMBER) {
        return;
    }

    // Update the current value of the counter
    currentValue = newValue;

    // Update the value of the HTML element that displays the counter value
    number.value = currentValue;

    // If the add button was previously disabled, re-enable it
    if (add.disabled === true) {
        add.disabled = false;
    }

    // If the current value is less than or equal to the minimum number, disable the subtract button
    if (currentValue <= MIN_NUMBER) {
        subtract.disabled = true;
    }
};

// Define the function to handle the click on the add button
const addHandler = () => {
    // Calculate the new value of the counter by adding the step amount
    const newValue = currentValue + stepAmount;

    // If the new value is greater than the maximum number, exit the function and do nothing
    if (newValue > MAX_NUMBER) {
        return;
    }

    // Update the current value of the counter
    currentValue = newValue;

    // Update the value of the HTML element that displays the counter value
    number.value = currentValue;

    // If the subtract button was previously disabled, re-enable it
    if (subtract.disabled === true) {
        subtract.disabled = false;
    }

    // If the current value is greater than or equal to the maximum number, disable the add button
    if (currentValue >= MAX_NUMBER) {
        add.disabled = true;
    }
};



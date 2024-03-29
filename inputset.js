// Select elements from the DOM
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const minInput = document.querySelector('[data-key="min"]');
const maxInput = document.querySelector('[data-key="max"]');
const setMinButton = document.querySelector('[data-key="set-min-button"]');
const setMaxButton = document.querySelector('[data-key="set-max-button"]');

// Initialize variables
let MIN_NUMBER = parseInt(minInput.value);
let MAX_NUMBER = parseInt(maxInput.value);
const stepAmount = 1;
let currentValue = 0;

// Validate min and max inputs
const validateInputs = () => {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    if (min >= 0) {
        minInput.value = "";
        throw new Error("Sorry, only negative numbers are allowed for the minimum value.");
    }

    if (max <= 0) {
        maxInput.value = "";
        throw new Error("Sorry, only positive numbers are allowed for the maximum value.");
    }

    if (min > max) {
        minInput.value = "";
        maxInput.value = "";
        throw new Error("Sorry, the minimum value cannot be greater than the maximum value.");
    }

    MIN_NUMBER = min;
    MAX_NUMBER = max;
};

// Handle subtract button click event
const subtractHandler = () => {
    const newValue = currentValue - stepAmount;
    if (newValue < MIN_NUMBER) {
        return;
    }

    currentValue = newValue;
    number.value = currentValue;

    if (add.disabled === true) {
        add.disabled = false;
    }

    if (currentValue <= MIN_NUMBER) {
        subtract.disabled = true;
    }
};

// Handle add button click event
const addHandler = () => {
    const newValue = currentValue + stepAmount;
    if (newValue > MAX_NUMBER) {
        return;
    }

    currentValue = newValue;
    number.value = currentValue;

    if (subtract.disabled === true) {
        subtract.disabled = false;
    }

    if (currentValue >= MAX_NUMBER) {
        add.disabled = true;
    }
};

// Handle set min button click event
setMinButton.addEventListener('click', () => {
    try {
        validateInputs();
        if (currentValue < MIN_NUMBER) {
            currentValue = MIN_NUMBER;
            add.disabled = false;
        }
    } catch (error) {
        alert(error.message);
    }
});

// Handle set max button click event
setMaxButton.addEventListener('click', () => {
    try {
        validateInputs();
        if (currentValue > MAX_NUMBER) {
            currentValue = MAX_NUMBER;
            subtract.disabled = false;
        }
    } catch (error) {
        alert(error.message);
    }
});

// Add event listeners to buttons
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);

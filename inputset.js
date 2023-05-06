const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const minInput = document.querySelector('[data-key="min"]');
const maxInput = document.querySelector('[data-key="max"]');
const setMinButton = document.querySelector('[data-key="set-min-button"]');
const setMaxButton = document.querySelector('[data-key="set-max-button"]');

let MIN_NUMBER = parseInt(minInput.value);
let MAX_NUMBER = parseInt(maxInput.value);
const stepAmount = 1;

const subtractHandler = () => {
    const newValue = parseInt(number.value) - stepAmount;

    if (newValue >= MIN_NUMBER) {
        number.value = newValue;
    }

    if (add.disabled === true){
        add.disabled = false;
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true;
    }
};

const addHandler = () => {
    const newValue = parseInt(number.value) + stepAmount;

    if (newValue <= MAX_NUMBER) {
        number.value = newValue;
    }

    if (subtract.disabled === true){
        subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER){
        add.disabled = true;
    }
};

setMinButton.addEventListener('click', () => {
    MIN_NUMBER = parseInt(minInput.value);
});

setMaxButton.addEventListener('click', () => {
    MAX_NUMBER = parseInt(maxInput.value);
});

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);

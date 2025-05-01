const kalkulator = [7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 'C', '0', '/', '='];

const container = document.querySelector('.container');
const display = document.querySelector('.display');
kalkulator.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.textContent = item;
    container.appendChild(div);
});

const items = document.querySelectorAll('.item');
display.textContent = '0';
let currentInput = '';
let operator = null;
let firstOperand = null;
let secondOperand = null;

container.addEventListener('click', (event) => {

    const value = event.target.textContent;
    const target = event.target.className;


    if (value === 'C' && target === 'item') {
        clear();
    } else if (value === '=') {
        if (firstOperand !== null && operator !== null) {
            secondOperand = parseFloat(currentInput);
            const result = calculate(firstOperand, secondOperand, operator);
            display.textContent = result;
            currentInput = result.toString();
            operator = null;
            firstOperand = null;
            secondOperand = null;
        }
    } else if (['+', '-', 'x', '/'].includes(value) && target === 'item') {
        if (currentInput !== '') {
            firstOperand = parseFloat(currentInput);
            operator = value === 'x' ? '*' : value; // Convert 'x' to '*'
            currentInput = '';
            display.textContent = firstOperand + ' ' + operator;
        }
    } else if (target === 'item') {
        currentInput += value;
        display.textContent = currentInput;
    }

});
function calculate(first, second, operator) {
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            return second;
    }
}
function clear() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    secondOperand = null;
    display.textContent = '0';
}
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
let inputNum = '';
let number = '';
let firstNum = null;
let secondNum = null;
let operator = '';
let result = 0;



container.addEventListener('click', (e) => {
    const target = e.target.textContent;
    const item = e.target.classList.contains('item');
    const operators = ['+', '-', 'x', '/'];

    if (item && target === 'C') {
        clear();
    } else if (item && target === '=') {
        secondNum = parseFloat(number);

        if (firstNum !== null && secondNum !== null) {
            result = calculate(firstNum, secondNum, operator)

            display.textContent = result
            number = result.toString();
            firstNum = null;
            secondNum = null;
            operator = '';
        }

    }
    else if (item && operators.includes(target)) {
        if (number !== '') {
            firstNum = parseFloat(number);
            operator = target === 'x' ? '*' : target;
            number = ''
            result = 0;
            display.textContent = firstNum + ' ' + target
        }
    } else if (item && target) {
        if (result === 0) {
            console.log(result);
            inputNum = target
            number += inputNum;
            inputNum = ''
            display.textContent = number
        } else {
            clear();
            number += target
            display.textContent = number

        }
    }
});

function calculate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        default:
            return secondNum;
    }
}

function clear() {
    display.textContent = '0';
    inputNum = '';
    firstNum = null;
    secondNum = null;
    operator = '';
    result = 0;
    number = ''

}
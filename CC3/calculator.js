/*At this point this file contains 
Zell Liew's code for JavaScript calculator
found at FreeCodeCamp article:
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
*/


const display = document.querySelector('.calculator__display');
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'subtract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
  }

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        if (!action) {
            const previousKeyType = calculator.dataset.previousKeyType;
            if (displayedNum === '0' ||
            previousKeyType === 'operator' ||
            previousKeyType === 'calculate') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
              display.textContent = displayedNum + '.';
            } else if (
              previousKeyType === 'operator' ||
              previousKeyType === 'calculate'
            ) {
              display.textContent = '0.';
            }
          calculator.dataset.previousKeyType = 'decimal'
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            const previousKeyType = calculator.dataset.previousKeyType;
            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;
                // Update calculated value as firstValue
                calculator.dataset.firstValue = calcValue;
            } else {
            // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum;
            }

            key.classList.add('is-depressed');
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.') ) {
                display.textContent = displayedNum + '.';
            }
            if (calculator.dataset.previousKeyType === 'operator') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action === 'clear') {
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = '';
                calculator.dataset.modValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
              } else {
                key.textContent = 'AC';
              }
            display.textContent = 0;
            calculator.dataset.previousKeyType = 'clear';
        }
        if (action !== 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE';
        }

        if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue = displayedNum;
            const previousKeyType = calculator.dataset.previousKeyType;
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                  }
                display.textContent = calculate(firstValue, operator, secondValue);
            }
            // Set modValue attribute
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
        }
    }
})

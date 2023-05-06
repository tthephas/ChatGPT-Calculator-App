let input = document.getElementById('input');
let operator = null;
let firstNumber = null;

function appendNumber(number) {
    input.value += number;
}

function setOperator(op) {
    operator = op;
    if (input.value) {
        firstNumber = parseFloat(input.value);
        input.value = '';
    }
}


function clearInput() {
    input.value = '';
    operator = null;
    firstNumber = null;
}

function calculate() {
    let secondNumber = parseFloat(input.value);
    let result;

    switch(operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }

    input.value = result;
    operator = null;
    firstNumber = null;
} 

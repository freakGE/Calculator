class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        if (this.currentOperand == '' && this.previousOperand.length > 0) {
            this.currentOperand = this.previousOperand;
            this.previousOperand = '';
            this.operation = undefined
        } else {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        } 
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.currentOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    squareNumber(number) {
        this.currentOperand = Math.pow(this.currentOperand, 2);
        this.previousOperand = '';
        this.operation = undefined;
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation){
            case '+':
                computation = prev + current;
                break
            case '-':
                computation = prev - current;
                break
            case '×':
                computation = prev * current;
                break
            case '÷':
                computation = prev / current;
                break
            default:
                return    
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = '';
        }

        console.log(this.currentOperandTextElement.innerText.length)
        if (this.currentOperandTextElement.innerText.length > 21) {
            currOperation.style = "font-size: 1.5rem";
        } 
        if (this.currentOperandTextElement.innerText.length > 28) {
            currOperation.style = "font-size: 1.3rem";
        }
        if (this.currentOperandTextElement.innerText.length > 32) {
            currOperation.style = "font-size: 1.1rem";
        }
        if (this.currentOperandTextElement.innerText.length > 38) {
            currOperation.style = "font-size: 1.1rem";
            output.style = "overflow-x: hidden;"
        }
    }
}


const output = document.querySelector('.output');
const currOperation = document.querySelector('.current-operand');

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const squareButton = document.querySelector('[data-square]');


const allButtons = document.querySelectorAll('button');


const previousOperandTextElement = document.querySelector('[data-previous-operand]'); //v2
const currentOperandTextElement = document.querySelector('[data-current-operand]'); //v2



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

squareButton.addEventListener('click', button => {
    calculator.squareNumber();
    calculator.updateDisplay();
})

window.onkeydown = function(e){
    let x = e.key;
    let choice
    switch(x){
        case '1':
            choice = document.querySelector('.one');
            choice.click();
            break

        case '2':
            choice = document.querySelector('.two');
            choice.click();
            break

        case '3':
            choice = document.querySelector('.three');
            choice.click();
            break

        case '4':
            choice = document.querySelector('.four');
            choice.click();
            break

        case '5':
            choice = document.querySelector('.five');
            choice.click();
            break
        case '6':
            choice = document.querySelector('.six');
            choice.click();
            break

        case '7':
            choice = document.querySelector('.seven');
            choice.click();
            break

        case '8':
            choice = document.querySelector('.eight');
            choice.click();
            break

        case '9':
            choice = document.querySelector('.nine');
            choice.click();
            break

        case '0':
            choice = document.querySelector('.zero');
            choice.click();
            break
        
        case 'Backspace':
            choice = document.querySelector('.delete');
            choice.click();
            break

        case '.':
            choice = document.querySelector('.dot');
            choice.click();
            break

        case '-':
            choice = document.querySelector('.minus');
            choice.click();
            break
        
        case '+':
            choice = document.querySelector('.plus');
            choice.click();
            break

        case '/':
            choice = document.querySelector('.divide');
            choice.click();
            break
        
        case '*':
            choice = document.querySelector('.multiple');
            choice.click();
            break

        case '=':
        case 'Enter':
            choice = document.querySelector('.equal');
            choice.click();
            break
        
        case 'Delete':
            choice = document.querySelector('.clear');
            choice.click();
            break

        case 'D':
        case 'd':
            choice = document.querySelector('.square');
            choice.click();
            break
        
        default:
            return
    }            
}    
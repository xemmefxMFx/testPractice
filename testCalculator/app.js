class Calculator {
    // construct a calculator object based on the passing parameters
    constructor(previousOperandTextElement, currentOperandTextElement) {
        // this refers to the object it is constructing
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // clearing the calculator upon creation
        this.clear()
    }

    clear() {
        // format the operand as empty strings
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        // Return the function if there is already a 'dot' input
        if (number === '.' && this.currentOperand.includes('.')) return;
        // Convert number to string so JS does not make calculations immediately instead of displaying the correct output
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        // if there is not current operand input, then return to cancel the function
        if (this.currentOperand === '') return 
        // if there is an existing previous operand input, then proceed to compute with current operand input
        if (this.previousOperand !== '') {
            this.compute()
        }
        // assign operation 
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computationResult;
        // convert operand string to float number for computation

        const prevVar = parseFloat(this.previousOperand);
        const curVar = parseFloat(this.currentOperand);

        // check condition for empty operand input
        if (isNaN(prevVar) || isNaN(curVar)) return

        // add switch statement for operation of choice
        switch (this.operation) {
            case '+':
                computationResult = prevVar + curVar;
                break;
            case '-':
                computationResult = prevVar - curVar;
                break;
            case '*':
                computationResult = prevVar * curVar;
                break;
            case '%':
                computationResult = prevVar / curVar;
                break;
            // default returns invalid because no operation was chosen
            default:
                return;
        }

        // clear the previous operand and operation
        // only display the result in the position of the current operand
        this.currentOperand = computationResult;
        this.previousOperand = '';
        this.operation = undefined;
    }

    updateDisplay() {
        // assign the output of operand
        // other functions work in the background and return the new inner text value for display
        this.currentOperandTextElement.innerText = this.currentOperand

        // when insert operation display output string of previous operand and the operation
        if (this.operation != null ) {
        this.previousOperandTextElement.innerText = 
        `${this.previousOperand} ${this.operation}`
        // clear out previous operand when there is no operation
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }

}



// Assign variables
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


// Assign calculator variable with the calculator class and pass in the constructor
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Add event listener to working buttons within the calculator 
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // appened the value of the (number) text inside the button
        calculator.appendNumber(button.innerText)
        // update the display with each click
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // choose the correct operation function
        calculator.chooseOperation(button.innerText)
        // update the display with each click
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})
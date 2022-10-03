class Calculator{
    constructor(previousButtonTextElement, currentButtonTextElement){
        this.previousButtonTextElement = previousButtonTextElement
        this.currentButtonTextElement = currentButtonTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== '' {
            this.compute()
        })
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    appendNumber(number){
        if(number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    compute(){

    }

    updateDisplay(){
        this.currentButtonTextElement.innerText = this.currentOperand
        this.previousButtonTextElement.innerText = this.previousOperand
    }


}

// Buttons Selection
const numberButtons =document.querySelectorAll('[data-number]')
const operationButtons =document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allClear]')
const previousButtonTextElement = document.querySelector('[data-previous-operand]')
const currentButtonTextElement = document.querySelector('[data-current-operand]')



const calculator = new Calculator(previousButtonTextElement, currentButtonTextElement)

// Buttons update display
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})
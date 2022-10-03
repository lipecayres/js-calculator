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

    chooseOperation(){

    }

    appendNumber(number){
        if(number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    compute(){

    }

    updateDisplay(){
        this.currentButtonTextElement.innerText = this.currentOperand
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
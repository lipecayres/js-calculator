class Calculator{
    constructor(previousButtonTextElement, currentButtonTextElement){
        this.previousButtonTextElement = previousButtonTextElement
        this.currentButtonTextElement = currentButtonTextElement
    }

    clear(){

    }

    delete() {

    }

    appendNumber(){

    }

    compute(){

    }

    updateDisplay(){
        
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
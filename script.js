class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.displayContent = ''
    }
}

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')

const calculator = new Calculator(displayElement)
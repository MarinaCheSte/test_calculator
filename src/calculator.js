//THEME CHANGE

const section = document.querySelector('.section')
const wrapper = document.querySelector('.wrapper')
const items = document.querySelectorAll('.calculator__item')
const lightItems = document.querySelectorAll('.calculator__item_light')
const coloredItems = document.querySelectorAll('.calculator__item_colored')
const disabledBtns = document.querySelectorAll('.func')

function toggleTheme() {
    if (!section.classList.contains('_section_light')) {
        section.classList.add('_section_light')
    } else {
        section.classList.remove('_section_light')
    }

    if (!wrapper.classList.contains('_wrapper_light')) {
        wrapper.classList.add('_wrapper_light')
    } else {
        wrapper.classList.remove('_wrapper_light')
    }

    for (let item of items) {
        if (!item.classList.contains('_item_light')) {
            item.classList.add('_item_light')
        } else {
            item.classList.remove('_item_light')
        }
    }

    for (let lightItem of lightItems) {
        if (!lightItem.classList.contains('_light')) {
            lightItem.classList.add('_light')
        } else {
            lightItem.classList.remove('_light')
        }
    }
    for (let coloredItem of coloredItems) {
        if (!coloredItem.classList.contains('_colored_light')) {
            coloredItem.classList.add('_colored_light')
        } else {
            coloredItem.classList.remove('_colored_light')
        }
    }
}

document.querySelector('.mode-button').onclick = toggleTheme

// CALCULATOR

let firstNumber = ''
let secondNumber = ''
let action = ''
let result = false

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const actions = ['+', '-', 'x', '÷']

const screen = document.querySelector('.calculator__result')
screen.textContent = '0'

let clearScreen = document.querySelector('.clear')

function clear() {
    firstNumber = ''
    secondNumber = ''
    action = ''
    result = false
    screen.textContent = '0'
}

clearScreen.addEventListener('click', clear)

let buttonsArea = document.querySelectorAll('.calculator__numbers')

for (let buttonline of buttonsArea) {
    buttonline.addEventListener('click', function (event) {
        if (!event.target.classList.contains('calculator__item')) return
        if (event.target.classList.contains('clear')) {
            for (let disabledBtn of disabledBtns) {
                disabledBtn.classList.remove('_disabled')
            }
            clear()
        }
        screen.textContent = '0'
        const key = event.target.textContent

        if (numbers.includes(key)) {
            if (action === '' && secondNumber === '') {
                if (key == '.') {
                    if (firstNumber.toString().indexOf('.') < 0)
                        firstNumber += '.'
                } else {
                    firstNumber += key
                }

                if (firstNumber.toString().startsWith('.')) {
                    firstNumber = '0' + firstNumber
                }
                screen.textContent = +firstNumber.toString().slice(0, 12)
            } else if (firstNumber !== '' && secondNumber !== '' && result) {
                if (key == '.') {
                    if (secondNumber.toString().indexOf('.') < 0)
                        secondNumber += '.'
                    if (result) {
                        clear()
                    }
                } else {
                    secondNumber = key
                }

                if (secondNumber.toString().startsWith('.')) {
                    secondNumber = '0' + secondNumber
                }

                result = false
                screen.textContent = +secondNumber.slice(0, 12)
            } else {
                if (key == '.') {
                    if (secondNumber.toString().indexOf('.') < 0)
                        secondNumber += '.'
                } else {
                    secondNumber += key
                }
                if (secondNumber.toString().startsWith('.')) {
                    secondNumber = '0' + secondNumber
                }
                screen.textContent = +secondNumber.toString().slice(0, 12)
            }
        }

        if (actions.includes(key)) {
            action = key
            screen.textContent = action
            for (let disabledBtn of disabledBtns) {
                if (action !== '') {
                    disabledBtn.classList.add('_disabled')
                }
            }
            return
        }

        if (key === '%') {
            firstNumber = (Number(firstNumber) / 100) * Number(secondNumber)
            result = true
            screen.textContent = +firstNumber.toString().slice(0, 12)
            for (let disabledBtn of disabledBtns) {
                disabledBtn.classList.remove('_disabled')
            }
        }

        if (key === '+/-') {
            if (firstNumber !== '' && secondNumber == '') {
                firstNumber = firstNumber * -1
                screen.textContent = firstNumber.toString().slice(0, 12)
            }
            if (secondNumber !== '' && firstNumber !== '') {
                secondNumber = secondNumber * -1
                screen.textContent = secondNumber.toString().slice(0, 12)
            }
            if (secondNumber !== '' && firstNumber !== '' && result) {
                firstNumber = firstNumber * -1
                result = true
                screen.textContent = +firstNumber.toString().slice(0, 12)
            }
        }

        if (key === '=') {
            for (let disabledBtn of disabledBtns) {
                disabledBtn.classList.remove('_disabled')
            }
            if (secondNumber === '') {
                secondNumber = firstNumber
            }
            switch (action) {
                case '':
                    firstNumber = Number(firstNumber)
                    break
                case '+':
                    firstNumber = Number(firstNumber) + Number(secondNumber)
                    break
                case '-':
                    firstNumber = Number(firstNumber) - Number(secondNumber)
                    break
                case 'x':
                    firstNumber = Number(firstNumber) * Number(secondNumber)
                    break
                case '÷':
                    if (secondNumber === '0') {
                        screen.textContent = 'Error'
                        firstNumber = ''
                        secondNumber = ''
                        action = ''
                        return
                    }
                    firstNumber = Number(firstNumber) / Number(secondNumber)
                    break
            }
            result = true
            screen.textContent = +firstNumber.toString().slice(0, 12)
        }
    })
}

import './calculator.css'
import './normalize.css'

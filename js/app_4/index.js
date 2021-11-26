import { Calculator } from './calculator.js'

console.log('Hello world')

window.addEventListener('load', () => {
  const calculator = new Calculator(
    Array.from(document.getElementsByTagName('input')),
    Array.from(document.getElementsByClassName('average_display'))
  )
  calculator.initialize()
  calculator.watch()
})

console.log("Hello world")

window.addEventListener('load', () => {
    const calculator = new Calculator(Array.from(document.getElementsByTagName('inputs')))
    calculator.watch()
})
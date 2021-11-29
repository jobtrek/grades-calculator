export class AppControl {
  constructor (el, calculator) {
    this.el = el
    this.calculator = calculator

    // Register an event that will call the supercharged click method of the child classes
    this.el.addEventListener('click', () => { this.click() })
  }
}

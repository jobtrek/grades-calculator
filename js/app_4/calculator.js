import { Average } from './average'
import { Grade } from './grade'

export class Calculator {
  /**
   * Create a new grades calculator
   * Indicate to the calculator on witch elements he needs to be attached
   * @param {HTMLInputElement[]} inputs
   * @param {Element[]} averages
   */
  constructor (inputs, averages) {
    // Prepare each averages and grades
    this.grades = inputs.map(e => new Grade(e))
    this.averages = averages.map(e => new Average(e))
    // Set the source grades for each average calculation
    this.averages.forEach(a => a.setGrades([...this.grades, ...this.averages]))
  }

  /**
   * Perform a first calculation with all available grades
   */
  initialize () {
    this.calculateAverages()
  }

  /**
   * Register watchers to updates averages on input changes
   */
  watch () {
    this.grades.forEach(g => g.el.addEventListener('change', () => this.calculateAverages()))
  }

  /**
   * Launch the average computation
   */
  calculateAverages () {
    this.averages.forEach(a => {
      a.calculate()
      a.display()
    })
  }
}

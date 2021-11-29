import { Average } from './average'
import { Grade } from './grade'
import { Storage } from './storage'
import { AppControl } from './control'
import { Random } from "./random";
import { Recompute } from "./recompute";
import { Reset } from "./reset";

export class Calculator {
  /**
   * Create a new grades calculator
   * Indicate to the calculator on witch elements he needs to be attached
   * @param {HTMLInputElement[]} inputs
   * @param {Element[]} averages
   * @param {HTMLButtonElement[]} controls
   */
  constructor (inputs, averages, controls) {
    // Prepare each averages and grades
    this.grades = inputs.map(e => new Grade(e))
    this.averages = averages.map(e => new Average(e))
    // Set the source grades for each average calculation
    this.averages.forEach(a => a.setGrades([...this.grades, ...this.averages]))
    this.storage = new Storage(this.grades, 'grades-calculator')
    // Initialise controls
    this.controls = controls.map(c => console.log(c))
  }

  /**
   * Perform a first calculation with all available grades
   */
  initialize () {
    this.storage.loadGrades()
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
    this.storage.saveGrades()
  }
}

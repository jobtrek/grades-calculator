import { AppControl } from './control'

export class Random extends AppControl {
  click () {
    Object.keys(this.calculator.grades).forEach(k => {
      this.calculator.grades[k].setValue(Math.floor(Math.random() * (6 - 1 + 1) + 1))
    })
    this.calculator.calculateAverages()
  }
}

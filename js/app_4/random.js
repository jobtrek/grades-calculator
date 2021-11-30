import { AppControl } from './control'

export class Random extends AppControl {
  click () {
    this.randomBell()
    Object.keys(this.calculator.grades).forEach(k => {
      this.calculator.grades[k].setValue(this.randomBell())
    })
    this.calculator.calculateAverages()
  }

  randomBell () {
    const r = Math.round(((((Math.random() + Math.random()) / 2) * 6 + 1) + 0.75) / 0.5) * 0.5
    return r > 6 ? 6 : r
  }
}

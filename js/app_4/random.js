import { AppControl } from './control'

export class Random extends AppControl {
  click () {
    this.randomBell()
    console.log(this.calculator.grades)
    Object.keys(this.calculator.grades).forEach(k => {
      if (!(this.calculator.grades[k].el.id.split('_')[0] === 'weight')) {
        this.calculator.grades[k].setValue(this.randomBell())
      }
    })
    this.calculator.calculateAverages()
  }

  randomBell () {
    const r = Math.round(((((Math.random() + Math.random()) / 2) * 6 + 1) + 0.5) / 0.5) * 0.5
    return r > 6 ? 6 : r
  }
}

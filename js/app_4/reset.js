import { AppControl } from './control'

export class Reset extends AppControl {
  click () {
    Object.keys(this.calculator.grades).forEach(k => { this.calculator.grades[k].setValue('') })
    this.calculator.calculateAverages()
  }
}

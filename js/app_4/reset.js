import { AppControl } from './control'

export class Reset extends AppControl {
  click () {
    Object.keys(this.calculator.grades).forEach(k => {
      if (!(this.calculator.grades[k].el.id.split('_')[0] === 'weight')) {
        this.calculator.grades[k].setValue('')
      }
    })
    this.calculator.calculateAverages()
  }
}

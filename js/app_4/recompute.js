import { AppControl } from './control'

export class Recompute extends AppControl {
  click () {
    this.calculator.calculateAverages()
  }
}

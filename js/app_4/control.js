import { Random } from './random'
import { Recompute } from './recompute'
import { Reset } from './reset'

export class Control {
  constructor (el) {
    this.el = el
  }

  static factory (el) {
    console.log('Factory call !')
    const factories = {
      random: Random,
      recompute: Recompute,
      reset: Reset
    }
    return new factories[el.dataset.buttonType](el)
  }
}

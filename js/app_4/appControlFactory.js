import { Random } from './random'
import { Recompute } from './recompute'
import { Reset } from './reset'

export function appControlFactory (el, calculator) {
  const factories = {
    random: Random,
    recompute: Recompute,
    reset: Reset
  }
  return new factories[el.dataset.buttonType](el, calculator)
}

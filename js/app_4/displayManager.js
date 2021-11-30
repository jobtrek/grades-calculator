import { Display } from './Display'

export class DisplayManager {

  constructor (displayString) {
    this.displays = []
    if (displayString) {
      this.displays = displayString
        .split(' ')
        .map(s => Display.displayFactory(s))
    }
  }

  updateView (value) {
    this.displays.forEach(d => d.updateView(value))
  }
}

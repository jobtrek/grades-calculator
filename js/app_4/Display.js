export class Display {
  static displayFactory (displayString) {
    const parts = displayString.split('_')
    const declaredDisplays = {
      emoji: Emoji,
      background: Background
    }
    return new declaredDisplays[parts[0]](parts[1])
  }

  constructor (id) {
    this.el = document.getElementById(id)
  }

  updateView (v) {
    if (v > 4 && v <= 6) {
      this.good()
    } else if (v === 4) {
      this.moderate()
    } else if (v < 4 && v >= 1) {
      this.bad()
    } else {
      this.default()
    }
  }
}

class Emoji extends Display {
  good () {
    this.el.innerHTML = '&#128525'
  }

  bad () {
    this.el.innerHTML = '&#128169'
  }

  moderate () {
    this.el.innerHTML = '&#128528'
  }

  default () {
    this.el.innerHTML = '&#129312'
  }
}

class Background extends Display {
  good () {
    this.clearClasses()
    this.el.classList.add('is-success')
  }

  bad () {
    this.clearClasses()
    this.el.classList.add('is-danger')
  }

  moderate () {
    this.clearClasses()
    this.el.classList.add('is-warning')
  }

  default () {
    this.clearClasses()
    this.el.classList.add('is-info')
  }

  clearClasses () {
    this.el.classList.remove('is-danger', 'is-success', 'is-warning', 'is-info')
  }
}

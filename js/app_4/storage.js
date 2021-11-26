export class Storage {
  /**
   * @param {Grade[]} grades
   * @param {string} key
   */
  constructor (grades, key) {
    this.grades = grades
    this.key = key
  }

  saveGrades () {
    localStorage.setItem(this.key, JSON.stringify(this.serialiseGrades()))
  }

  loadGrades () {
    const retrievedGrades = localStorage.getItem(this.key)
    for (const grade of this.grades) {
      if (retrievedGrades[grade.getName()]) {
        grade.setValue(retrievedGrades[grade.getName()])
      }
    }
  }

  clear () {
    localStorage.clear()
  }

  serialiseGrades () {
    const gradesObj = {}

    for (const grade of this.grades) {
      console.log(grade)
      gradesObj[grade.getName()] = grade.getValue()
    }
    console.log(gradesObj)
    return gradesObj
  }
}

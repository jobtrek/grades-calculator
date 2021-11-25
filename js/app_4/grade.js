export class Grade {

    /** @type {HTMLInputElement} **/
    el;

    /**
     *
     * @param {HTMLInputElement} el
     */
    constructor(el) {

        this.el = el

    }

    getName() {
        return this.el.dataset.gradeName
    }

    setName(name) {
        this.el.dataset.gradeName = name
    }

    getAverageGroup() {
        return this.el.dataset.gradeAverageGroup
    }

    setAverageGroup(name) {
        this.el.dataset.gradeAverageGroup = name
    }

    getWeight() {
        return document.getElementById(this.el.dataset.gradeWeightId) ? parseFloat(document.getElementById(this.el.dataset.gradeWeightId).value) : 1
    }

    getValue() {
        return parseFloat(this.el.value)
    }

    setValue(grade) {
        this.el.value = grade
    }
}
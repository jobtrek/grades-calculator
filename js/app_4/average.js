export class Average {

    /**
     *
     * @param {HTMLElement} el
     */
    constructor(el) {
        this.el = el
    }

    /**
     * Perform the average calculation from the provided and corresponding grades
     */
    calculate() {
        this.computedAverage = this.round(this.average(this.grades), 0.5)
    }

    average(grades) {
        console.log("Grades for avg : ", grades)
        let sums = grades.filter(g => !isNaN(g.getValue())).reduce((acc, g) => {
            console.log(acc)
            console.log(g)
            console.log(g.getValue())
            console.log(g.getWeight())
            return {
                sum: acc.sum + (g.getValue() * g.getWeight()),
                div: acc.div + g.getWeight()
            }
        
        }, {sum: 0, div: 0})
        console.log(sums.sum / sums.div)
        return sums.sum / sums.div
    }

    /**
     * Round a number to the specified multiple
     * @param {number} n The number to round
     * @param {number} m The multiple to round
     * @returns {number}
     */
    round(n, m) {
        return Math.round(n / m) * m
    }

    /**
     * Return un array with the grades matching this average group
     */
    getGrades() {
        return this.grades
    }

    /**
     * Set the grades for this average computation
     * @param {(Grade | Average)[]} grades
     */
    setGrades(grades) {
        this.grades = grades.filter(e => e.getAverageGroup() === this.getSourceGroup())
    }

    /**
     * Display the current average value in the provided html element
     */
    display() {
        this.el.innerText = this.computedAverage
    }

    getName() {
        return this.el.dataset.gradeName
    }

    setName(name) {
        this.el.dataset.gradeName = name
    }

    getSourceGroup() {
        return this.el.dataset.averageSource
    }

    setSourceGroup(name) {
        this.el.dataset.AverageSource = name
    }

    getAverageGroup() {
        return this.el.dataset.gradeAverageGroup
    }

    setAverageGroup(name) {
        this.el.dataset.gradeAverageGroup = name
    }

    getWeight() {
        return document.getElementById(this.el.dataset.gradeWeightId).value ?? 1
    }

    getValue() {
        return this.computedAverage ?? null
    }

    setValue(v) {
        this.computedAverage = v
    }
}
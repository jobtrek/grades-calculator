// Grades storage
let grades = {}
let inputs = null

window.addEventListener('load', () => {
    console.log("Document ready")
    inputs = document.getElementsByTagName('input')

    // Retrieve all the weighting and grades
    getGradesValues()
    attachListenerToAllInputs()
    calculateAverages()

    // Display grades storage object
    console.log(grades)
})

function getGradesValues() {
    for (let input of inputs) {
        grades[input.id] = parseInt(input.value, 10)
    }
    console.log('New grades retrieved')
    console.log(grades)
}

function attachListenerToAllInputs() {
    for (let input of inputs) {
        input.addEventListener('focusout', getGradesValues)
    }
}




function calculateAverages() {

    // Math + english average 0.5
    // ECG average 0.5
    // Modules average 0.1
    // Global average 0.1
    console.log(average(grades.grade_math_1, grades.grade_math_2, grades.grade_math_3))

}

/**
 * Make the average of the values in the array
 * @param arr Array of grades
 */
function average(...arr) {
    return arr.reduce((a, b) => a + b) / arr.length
}

function round(value, multiple) {
    return Math.ceil(value/multiple) * multiple
}
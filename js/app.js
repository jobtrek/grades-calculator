// Grades storage
let grades = {}
let inputs = null

window.addEventListener('load', () => {
    console.log("Document ready")
    inputs = document.getElementsByTagName('input')

    // Retrieve all the weighting and grades
    calculateAverages()
    attachListenerToAllInputs()

    // Display grades storage object
    console.log(grades)
})

function getGradesValues() {
    for (let input of inputs) {
        grades[input.id] = parseFloat(input.value)
    }
    console.log('New grades retrieved')
    console.log(grades)
}

function attachListenerToAllInputs() {
    for (let input of inputs) {
        input.addEventListener('input', calculateAverages)
    }
}

function calculateAverages() {

    getGradesValues()

    // Math + english average 0.5
    // ECG average 0.5
    // Modules average 0.1
    // Global average 0.1
    grades.mathEnglishAverage = round(averageWithWeights([
        grades.math_1,
        grades.math_2,
        grades.math_3,
        grades.ang_1,
        grades.ang_2,
        grades.ang_3,
        grades.ang_4,
        grades.ang_5,
    ]), 0.5).toFixed(1)
    grades.ecgAverage = round(averageWithWeights([
        grades.ecg_1,
        grades.ecg_2,
        grades.ecg_3,
        grades.ecg_4,
        grades.ecg_5,
        grades.ecg_6,
        grades.ecg_7,
        grades.ecg_8,
    ]), 0.5).toFixed(1)
    grades.proAverage = round(averageWithWeights([
        grades.modules_epro,
        grades.modules_cie,
    ],[
        grades.weight_epro,
        grades.weight_cie
    ]), 0.1).toFixed(1)
    grades.generalAverage = round(averageWithWeights([
        grades.tpi,
        grades.mathEnglishAverage,
        grades.ecgAverage,
        grades.proAverage,
    ],[
        grades.weight_tpi,
        grades.weight_conn_general,
        grades.weight_ecg,
        grades.weight_comp_prof,
    ]), 0.1).toFixed(1)

    displayAverages()
}

function displayAverages() {
    document.getElementById('avg_conn_general').innerText = grades.mathEnglishAverage
    document.getElementById('avg_ecg').innerText = grades.ecgAverage
    document.getElementById('avg_comp_pro').innerText = grades.proAverage
    document.getElementById('avg_general').innerText = grades.generalAverage
    if (grades.generalAverage >= 4) {
        document.getElementById('graduation_hint').innerHTML = '&#128525'
        document.getElementById('graduation_background_color').classList.replace('is-danger', 'is-success')
    } else {
        document.getElementById('graduation_hint').innerHTML = '&#128169'
        document.getElementById('graduation_background_color').classList.replace('is-success', 'is-danger')
    }
}

/**
 * Make the average of the values in the array
 * @param grades
 * @param weights
 */
function averageWithWeights(grades, weights = null) {

    let weightedGradesTotal = 0
    let totalWeights = 0

    for (let i = 0; i < grades.length; i++) {

        if(weights === null || grades.length !== weights.length) {
            weightedGradesTotal += grades[i]
            totalWeights += 1
        } else {
            weightedGradesTotal += grades[i] * weights[i]
            totalWeights += weights[i]
        }

    }

    return weightedGradesTotal / totalWeights
}

function round(value, multiple) {
    return Math.round(value/multiple) * multiple
}
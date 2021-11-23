console.log("Hello from JS")

/**
 * OK- Récupérer les valeurs depuis l'HTML (transférer les valeurs HTML -> JS)
 * OK- Mettre ces différentes notes dans un objet
 * OK- Ecouter les événements de changement sur les inputs
 * OK- Identifier quelles notes constituent quelles moyennes (on peut les regrouper dans un tableau)
 * OK- Calculer les différentes moyennes
 * OK- Arrondir les moyennes
 * OK- Calculer la moyenne générale avec les pondérations
 * OK- Re-transférer les valeurs de JS -> HTML
 *
 * OK- On veut que le calcul se refasse à chaque changement (à la volée)
 * OK- On ne veut pas considérer les NaN (ce qui n'est pas un nombre)
 * OK- Ingnorer les 0
 * OK- Etre capable d'écouter les événements "onchange" sur les inputs
 *
 * OK- Avoir une fonction qui sait calculer des moyennes
 * OK- Avoir une fonction qui sait faire des arrondi au multiple
 * OK- Avoir une fonction qui sait faire des moyennes pondérées
 * OK- Avoir une fonction qui récupére les inputs depuis le HTML
 * OK- Une fonction qui enregistre des écouteurs d'événment sur les inputs
 * */

let grades = {}
let baseKnowledges = []
let ecgKnowledges = []
let modulesICT = []
let weightICTmodules = []
let generalAverageGrades = []
let generalAverageGradesWeights = []

window.addEventListener("load", () => {
    // Le code à executer lorsque l'événement load est mis
    console.log("Evenement load emis")

    getGradesValuesFromHTML()
    registerChangeEventsListenerOnInputs()

})

/**
 * Fonction que se charge de calculer la moyenne des tous les nombres contenu dans le tableau que l'on lui donne
 * @param gradesArray
 * @returns {number}
 */
function calculateAverage(gradesArray) {

    let sum = 0
    let divider = 0

    for (let grade of gradesArray) {
        if (!isNaN(grade)) {
            sum += grade
            divider++
        }
    }

    return sum / divider

}

/**
 * Calcule la moyenne pondérée
 * Il faut passer à cette fonction un tableau avec les notes, et un tableau avec les pondérations
 * @param gradesArray
 * @param weightArray
 * @returns {number}
 */
function weightedAverage(gradesArray, weightArray) {

    let sum = 0
    let divider = 0

    for (let i = 0; i < gradesArray.length; i++) {
        if (!isNaN(gradesArray[i])) {
            sum += (gradesArray[i] * weightArray[i])
            divider += weightArray[i]
        }
    }

    return sum / divider

}

/**
 * Arrondi un nombre au multiple que l'on souhaite
 * @param number
 * @param multiple
 * @returns {number}
 */
function roundNumber(number, multiple) {
    return Math.round(number / multiple) * multiple
}

/**
 * Récupère les notes qui sont dans les inputs html et les sauvergarde dans l'objet grades
 */
function getGradesValuesFromHTML() {

    let inputs = document.getElementsByTagName('input')

    for (let input of inputs) {
        grades[input.id] = parseFloat(input.value)
    }

    arrayConstitution()

}

/**
 * Crée les différents tableaux pour pouvoir ensuite faire les moyennes
 */
function arrayConstitution() {

    // Mettre dans le tableau baseKnowleges les notes concernées
    baseKnowledges = [
        grades.math_1,
        grades.math_2,
        grades.math_3,
        grades.ang_1,
        grades.ang_2,
        grades.ang_3,
        grades.ang_4,
        grades.ang_5,
    ]
    let baseKnowledgeAvg = roundNumber(calculateAverage(baseKnowledges), 0.5)

    ecgKnowledges = [
        grades.ecg_1,
        grades.ecg_2,
        grades.ecg_3,
        grades.ecg_4,
        grades.ecg_5,
        grades.ecg_6,
        grades.ecg_7,
        grades.ecg_8,
    ]
    let ecgKnowledgeAvg = roundNumber(calculateAverage(ecgKnowledges), 0.5)

    modulesICT = [
        grades.mod_epro,
        grades.mod_cie,
    ]
    weightICTmodules = [
        grades.weight_epro,
        grades.weight_cie
    ]
    let ICTmodulesAvg = roundNumber(weightedAverage(
        modulesICT,
        weightICTmodules,
    ), 0.1)

    generalAverageGrades = [
        baseKnowledgeAvg,
        ecgKnowledgeAvg,
        ICTmodulesAvg,
        grades.mod_tpi
    ]
    generalAverageGradesWeights = [
        grades.weight_conn_general,
        grades.weight_ecg,
        grades.weight_comp_prof,
        grades.weight_tpi,
    ]
    let generalAverage = roundNumber(weightedAverage(
        generalAverageGrades,
        generalAverageGradesWeights
    ), 0.1)

    writeAveragesToHTML(
        baseKnowledgeAvg,
        ecgKnowledgeAvg,
        ICTmodulesAvg,
        generalAverage
    )
}

/**
 * Enregistre des écouteurs d'événements sur tous les inputs dans le code html
 */
function registerChangeEventsListenerOnInputs() {

    let inputs = document.getElementsByTagName('input')

    for (let input of inputs) {
        input.addEventListener('change', getGradesValuesFromHTML)
    }

}

/**
 * Affiche les moyennes calculées dans notre page web
 * @param avgCompGen
 * @param avgEcg
 * @param avgCompProf
 * @param avgGeneral
 */
function writeAveragesToHTML(avgCompGen, avgEcg, avgCompProf, avgGeneral) {

    document.getElementById('avg_conn_general').innerText = avgCompGen.toFixed(1)
    document.getElementById('avg_ecg').innerText = avgEcg.toFixed(1)
    document.getElementById('avg_comp_pro').innerText = avgCompProf.toFixed(1)
    document.getElementById('avg_general').innerText = avgGeneral.toFixed(1)
}

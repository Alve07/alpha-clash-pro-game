function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-300');
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet() {
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStrings.split('')

    // Generating random index
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

function showScore() {
    hideElementById('play-ground')
    showElementById('score-section')
    // Update final score
    // 1. get the final score
    const lastScore = getElementValueById('current-score');
    setTextElementValueById('added-score', lastScore);

    // clearing the last highlighted key
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}


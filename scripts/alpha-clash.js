// function play() {
//     // Hiding home screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')

//     // Showing playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }

// Handling keyboard button pressed
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escape') {
        showScore();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        // Update score
        const currentScore = getElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);







        // -------------------------------------------------------
        // 1. get current score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)

        // 2. increase it by 1
        // const newCurrentScore = currentScore + 1;

        // 3. update the score and show it
        // currentScoreElement.innerText = newCurrentScore;


        removeBackgroundColorById(playerPressed)
        gameLoop();
    }
    else {
        // Update life
        // get current life
        const currentLife = getElementValueById('current-life');

        // decrease it by 1
        const newLife = currentLife - 1;

        // update and show
        setTextElementValueById('current-life', newLife);

        if (newLife === 0) {
            showScore()
        }

    }

}

// capture key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function gameLoop() {
    // Generating random alphabet
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}




function play() {
    hideElementById('home-screen');
    hideElementById('score-section')
    showElementById('play-ground')

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    gameLoop()
}
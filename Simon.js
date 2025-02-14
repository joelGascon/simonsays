const colors = ['red', 'green', 'blue', 'yellow'];
let sequence = [];
let playerSequence = [];
let score = 0;
const playerNameInput = document.getElementById('playerName');
const startBtn = document.getElementById('startBtn');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');
const scoreboard = document.getElementById('scoreboard');

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

function startGame() {
    const playerName = playerNameInput.value;
    if (playerName) {
        score = 0;
        sequence = [];
        playerSequence = [];
        nextRound();
        updateHighScore();
        displayScoreboard();
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
}

function nextRound() {
    playerSequence = [];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(randomColor);
    showSequence();
}

function showSequence() {
    let index = 0;
    const interval = setInterval(() => {
        if (index >= sequence.length) {
            clearInterval(interval);
            enablePlayerInput();
            return;
        }
        const color = sequence[index];
        highlightButton(color);
        index++;
    }, 1000);
}

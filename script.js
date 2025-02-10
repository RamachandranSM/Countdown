let intervalId;
let elapsedTime = 0;
const countdownDisplay = document.getElementById("countdown");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

function updateCountdownDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    countdownDisplay.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener("click", function () {
    if (!intervalId) {
        intervalId = setInterval(() => {
            elapsedTime++;
            updateCountdownDisplay();
        }, 1000);
        startButton.disabled = true;
        pauseButton.disabled = false;
    }
});

pauseButton.addEventListener("click", function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        pauseButton.disabled = true;
        startButton.disabled = false;
    }
});

resetButton.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = 0; 
    countdownDisplay.innerText = "00:00:00"; 
    pauseButton.disabled = true;
    startButton.disabled = false;
});

updateCountdownDisplay();
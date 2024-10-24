let startTime = 0;
let updatedTime = 0;
let difference = 0;
let interval;
let running = false;
let laps = [];
const timeDisplay = document.getElementById('timeDisplay');
const lapList = document.getElementById('laps');

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - difference;
        interval = setInterval(updateDisplay, 1000);
        running = true;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(interval);
        difference = Date.now() - startTime;
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    startTime = 0;
    difference = 0;
    timeDisplay.innerHTML = "00:00:00";
    laps = [];
    lapList.innerHTML = "";
}

function lapStopwatch() {
    if (running) {
        laps.push(timeDisplay.innerHTML);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.length}: ${timeDisplay.innerHTML}`;
        lapList.appendChild(lapItem);
    }
}

function updateDisplay() {
    updatedTime = Date.now() - startTime;
    const seconds = Math.floor((updatedTime / 1000) % 60);
    const minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
    const hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);

    timeDisplay.innerHTML = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('startBtn').addEventListener('click', startStopwatch);
document.getElementById('pauseBtn').addEventListener('click', pauseStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);
document.getElementById('lapBtn').addEventListener('click', lapStopwatch);

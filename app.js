let remainingTime = 1500;
let intervalId = null;

function updateDisplay() {
const timer = document.getElementById("timer");
let minutes = Math.floor(fulltimer / 60);
let seconds = fulltimer % 60;

let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

let displayTime = formattedMinutes + ":" + formattedSeconds;
timer.innerText = displayTime;
}
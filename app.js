let remainingTime = 1500;
let intervalId = null;

function updateDisplay() {
const timer = document.getElementById("timer");
let minutes = Math.floor(remainingTime / 60);
let seconds = remainingTime % 60;

let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

let displayTime = formattedMinutes + ":" + formattedSeconds;
timer.innerText = displayTime;
}

function startTimer() {

  const startButton = document.getElementById("bigstart");

  // If timer is running → STOP it
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startButton.innerText = "START";
    return;
  }

  // Otherwise → START it
  intervalId = setInterval(function() {

    remainingTime--;
    updateDisplay();

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      startButton.innerText = "START";
        
      const sound = document.getElementById("alarmSound");
        sound.play();

        startButton.classList.add("shake");

        setTimeout(function() {
            startButton.classList.remove("shake");
        }, 1200);
    }

  }, 1000);

  startButton.innerText = "STOP";
}
const startButton = document.getElementById("bigstart");
startButton.addEventListener("click", startTimer);

updateDisplay();
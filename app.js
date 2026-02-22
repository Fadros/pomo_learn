const timer = getElementById("timer");
let fulltimer = 1500;

let minutes = Math.floor(fulltimer / 60);
let seconds = fulltimer % 60;

let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

let displayTime = formattedMinutes + ":" + formattedSeconds;
timer.innerText = displayTime;
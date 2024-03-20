let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer = document.getElementById("time");

let interval;
let timeLeft = 1500;

const updateTimer = () => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString()}:${seconds.toString()}`;
  timer.innerHTML = formattedTime.toString();
  
};

const startStopWatch = () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
  }, 1000);
};
const stopStopWatch = () => {
  clearInterval(interval);
};
const resetStopWatch = () => {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
};
start.addEventListener("click", startStopWatch);
stop.addEventListener("click", stopStopWatch);
reset.addEventListener("click", resetStopWatch);

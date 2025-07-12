let [minutes, seconds, milliseconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  const display = document.getElementById("display");
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  display.innerText = `${m}:${s}:${ms}`;
}

function startStopwatch() {
  if (timer !== null) return;
  timer = setInterval(() => {
    milliseconds++;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  [minutes, seconds, milliseconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = '';
}

function recordLap() {
  const lapTime = document.getElementById("display").innerText;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  lapList.appendChild(li);
}
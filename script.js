let countdown;
let totalSeconds;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');

function formatTime(sec) {
  let mins = Math.floor(sec / 60);
  let secs = sec % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimer() {
  totalSeconds--;
  timerDisplay.textContent = formatTime(totalSeconds);

  if (totalSeconds <= 0) {
    clearInterval(countdown);
    isRunning = false;
    alert("Time's up!");
  }
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    totalSeconds = minutes * 60 + seconds;

    if (totalSeconds > 0) {
      countdown = setInterval(updateTimer, 1000);
      isRunning = true;
    } else {
      alert('Please enter a valid time.');
    }
  }
});

pauseBtn.addEventListener('click', () => {
  clearInterval(countdown);
  isRunning = false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  isRunning = false;
  totalSeconds = 0;
  timerDisplay.textContent = '00:00';
  minutesInput.value = '';
  secondsInput.value = '';
});

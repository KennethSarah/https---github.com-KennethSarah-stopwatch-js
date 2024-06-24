// Write JavaScript code here
const startStopButton =  document.getElementById('startStop')
let isStarted = false;
let intervalId;
    let seconds = 0;
startStopButton.addEventListener('click', function() {
  if (isStarted) {
    this.textContent = 'Start';
     clearInterval(intervalId);
  } else {
    this.textContent = 'Stop';
    intervalId = setInterval(updateStopwatch, 1000);
  }
  isStarted = !isStarted;
});
 
const stopWatch = document.getElementById('stopwatch')
    function updateStopwatch() {
      seconds++;
      stopWatch.textContent = formatTime(seconds);
    }

    function formatTime(seconds) {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }

    function pad(number) {
      return number < 10 ? '0' + number : number;
    }

    const resetButton = document.getElementById('reset');

    resetButton.addEventListener('click', () => {
        clearInterval(intervalId);
        isStarted = false;
        seconds = 0;
        stopWatch.textContent = '00:00:00';
        startStopButton.textContent = 'Start';
    })
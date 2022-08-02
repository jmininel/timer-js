
const timeDisplay = document.querySelector('.displayTimer')
const start_btn = document.querySelector('#btn-start');
const pause_btn = document.querySelector('#btn-pause');
const reset_btn = document.querySelector('#btn-reset');

let seconds = 0;
let interval = null;

start_btn.addEventListener('click', start);
pause_btn.addEventListener('click', stop );
reset_btn.addEventListener('click', reset);

function timer() {
    seconds++; 

    let hrs = Math.floor(seconds / 3600) ;
    let mins = Math.floor((seconds - (hrs * 3600)) / 60) ;
    let secs = (seconds  % 60);

    if(hrs < 10) hrs = '0' + hrs;
    if(mins < 10) mins = '0' + mins;
    if(secs < 10) secs = '0' + secs;
    
    timeDisplay.innerText = `${hrs}:${mins}:${secs}`;
    
}

function start () {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
} 

function stop() {
  clearInterval(interval);
   interval = null;
}

function reset() {
    stop();
    seconds = 0;
    timeDisplay.innerHTML = '00:00:00'
}
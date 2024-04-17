let mins = 25;
let secs = mins * 60;
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");  
let timerRunning = false;

function Decrement() {
    var timer;
    if (document.getElementById) {
        if (seconds < 59) {
            seconds.value = secs;
        }
        else {
            minutes.value = getMinutes();
            seconds.value = getSeconds();
            formatTime();
        }

        if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        else {
            minutes.style.color = "black";
            seconds.style.color = "black";
        }
        
        if (mins < 0) {
            alert('time up');
            minutes.value = 0;
            seconds.value = 0;
            formatTime();
        }
        else {
            secs--;
            if (timerRunning) {
                timer = setTimeout('Decrement()', 1000);
            }
        }
    }
}

function startCountdown() {
    if(timerRunning === false) {
        setTimeout('Decrement()', 60);
    }
    timerRunning = true;
}

function stopCountdown() {
    timerRunning = false;
}

function getMinutes() {
    mins = Math.floor(secs / 60);
    return mins;
}

function getSeconds() {
    return secs - Math.round(mins * 60);
}

function formatTime() {
    if(minutes.value < 10) {
        minutes.value = '0' + minutes.value.slice(-2);
    }
    if(seconds.value < 10) {
        seconds.value = '0' + seconds.value.slice(-2);
    }
}

function setPomodoro() {
    stopCountdown();
    mins = 25;      // Eventually allow user to set time
    minutes.value = mins;
    secs = mins * 60;
    seconds.value = 0;
    formatTime();    
}

function setShortBreak() {
    stopCountdown();
    mins = 5;      // Eventually allow user to set time
    minutes.value = mins;
    secs = mins * 60;
    seconds.value = 0;
    formatTime();
}

function setLongBreak() {
    stopCountdown();
    mins = 30;      // Eventually allow user to set time
    minutes.value = mins;
    secs = mins * 60;
    seconds.value = 0;
    formatTime();
}
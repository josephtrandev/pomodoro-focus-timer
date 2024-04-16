let mins = 0;
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
        }

        // Timer Display
        if (mins < 10) {
            minutes.value = '0' + mins;
        }
        if (secs < 10) {
            seconds.value = '0' + secs;
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
            minutes.value = '0' + 0;
            seconds.value = '0' + 0;
            timerRunning = false;
        }
        else {
            if (timerRunning === true) {
                secs--;
                setTimeout('Decrement()', 1000);
            }
            else {
                return;
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

function setPomodoro() {
    stopCountdown();
    mins = 25;
    secs = mins * 60;

    if (mins < 10) {
        minutes.value = '0' + mins;
    }
    else {
        minutes.value = mins;
    }

    seconds.value = '0' + 0;
}

function setShortBreak() {
    stopCountdown();
    mins = 5;
    secs = mins * 60;

    if (mins < 10) {
        minutes.value = '0' + mins;
    }
    else {
        minutes.value = mins;
    }

    seconds.value = '0' + 0;
}

function setLongBreak() {
    stopCountdown();
    mins = 30;
    secs = mins * 60;

    if (mins < 10) {
        minutes.value = '0' + mins;
    }
    else {
        minutes.value = mins;
    }

    seconds.value = '0' + 0;
}
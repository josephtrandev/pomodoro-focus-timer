let mins = .1;
let secs = mins * 60;
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");  
let timerRunning = false;
let alarm = new Audio('./sound/basic-alarm.mp3');

function Decrement() {
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
            minutes.style.color = "white";
            seconds.style.color = "white";
        }
        
        if (mins < 0) {
            alarm.play();
            minutes.value = 0;
            seconds.value = 0;
            formatTime();
            alert('time up');
            alarm.pause();
            alarm.load();
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
    document.getElementById("set-pomodoro").classList.add("btnActive");
    document.getElementById("set-short").classList.remove("btnActive");
    document.getElementById("set-long").classList.remove("btnActive");
    minutes.style.color = "white";
    seconds.style.color = "white";
    
    mins = 25;      // Eventually allow user to set time
    minutes.value = mins;
    secs = mins * 60;
    seconds.value = 0;
    formatTime();    
}

function setShortBreak() {
    stopCountdown();
    document.getElementById("set-short").classList.add("btnActive");
    document.getElementById("set-pomodoro").classList.remove("btnActive");
    document.getElementById("set-long").classList.remove("btnActive");
    minutes.style.color = "white";
    seconds.style.color = "white";

    mins = 5;      // Eventually allow user to set time
    minutes.value = mins;
    secs = mins * 60;
    seconds.value = 0;
    formatTime();
}

function setLongBreak() {
    stopCountdown();
    document.getElementById("set-long").classList.add("btnActive");
    document.getElementById("set-short").classList.remove("btnActive");
    document.getElementById("set-pomodoro").classList.remove("btnActive");
    minutes.style.color = "white";
    seconds.style.color = "white";

    mins = 30;      // Eventually allow user to set time
    minutes.value = mins;
    secs = mins * 60;
    seconds.value = 0;
    formatTime();
}
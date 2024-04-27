let myTimer;
let totalTime = 1500; // value in seconds, default of 1500 is 25 minutes
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let timerRunning = false;
let alarm = new Audio('./sound/basic-alarm.mp3');

function clock() {
    if (document.getElementById) {
        myTimer = setInterval(myClock, 1000);

        function myClock() {
            --totalTime
            secs = totalTime % 60; // Seconds that cannot be written in minutes
            let secondsInMinutes = (totalTime - secs) / 60; // Gives the seconds that COULD be given in minutes
            mins = secondsInMinutes % 60;

            minutes.value = mins;
            seconds.value = secs;

            if (mins < 1) {
                minutes.style.color = "red";
                seconds.style.color = "red";
            }
            else {
                minutes.style.color = "white";
                seconds.style.color = "white";
            }

            formatTime();

            if (totalTime < 0) {
                clearInterval(myTimer);

                minutes.value = 0;
                seconds.value = 0;
                formatTime();

                alarm.play();
                alert('time up');
                alarm.pause();
                alarm.load();
            }
        }
    }
}

function startCountdown() {
    if(timerRunning === false) {
        clock();
    }
    
    timerRunning = true;
}

function stopCountdown() {
    clearInterval(myTimer);
    timerRunning = false;
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
    
    totalTime = 1500;      // 25 min, Eventually allow user to set time
    minutes.value = 25;
    seconds.value = 0;
    formatTime();    
}

function setShortBreak() {
    stopCountdown();

    totalTime = 300;      // 5 min, Eventually allow user to set time
    minutes.value = 5;
    seconds.value = 0;
    formatTime();
}

function setLongBreak() {
    stopCountdown();

    totalTime = 1800;      // 30 min, Eventually allow user to set time
    minutes.value = 30;
    seconds.value = 0;
    formatTime();
}
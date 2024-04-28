let myTimer;
let totalTime = 1500; // default of 1500 seconds is 25 minutes
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const pomoButton = document.getElementById("set-pomodoro")
const shortButton = document.getElementById("set-short")
const longButton = document.getElementById("set-long")

let timerRunning = false;
let alarm = new Audio('./sound/basic-alarm.mp3');

function clock() {
    if (document.getElementById) {
        myTimer = setInterval(myClock, 1000);

        function myClock() {
            --totalTime
            secs = totalTime % 60;
            mins = (totalTime - secs) / 60;

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

    startButton.classList.add("noHover");
    startButton.style.opacity = 0.5;
    stopButton.classList.remove("noHover");
    stopButton.style.opacity = 1;

    pomoButton.classList.add("noHover");
    pomoButton.style.opacity = 0.5;
    shortButton.classList.add("noHover");
    shortButton.style.opacity = 0.5;
    longButton.classList.add("noHover");
    longButton.style.opacity = 0.5;

    minutes.classList.add("noHover");
    seconds.classList.add("noHover");
    
    timerRunning = true;
}

function stopCountdown() {
    clearInterval(myTimer);

    startButton.classList.remove("noHover");
    startButton.style.opacity = 1;
    stopButton.classList.add("noHover");
    stopButton.style.opacity = 0.5;

    pomoButton.classList.remove("noHover");
    pomoButton.style.opacity = 1;
    shortButton.classList.remove("noHover");
    shortButton.style.opacity = 1;
    longButton.classList.remove("noHover");
    longButton.style.opacity = 1;

    minutes.classList.remove("noHover");
    seconds.classList.remove("noHover");

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

    pomoButton.classList.add("btnActive", "noHover");
    shortButton.classList.remove("btnActive", "noHover");
    longButton.classList.remove("btnActive", "noHover");
    minutes.style.color = "white";
    seconds.style.color = "white";
    
    totalTime = 1500;      // 25 min in seconds
    minutes.value = 25;
    seconds.value = 0;
    formatTime();    
}

function setShortBreak() {
    stopCountdown();

    shortButton.classList.add("btnActive", "noHover");
    pomoButton.classList.remove("btnActive", "noHover");
    longButton.classList.remove("btnActive", "noHover");
    minutes.style.color = "white";
    seconds.style.color = "white";

    totalTime = 300;      // 5 min in seconds
    minutes.value = 5;
    seconds.value = 0;
    formatTime();
}

function setLongBreak() {
    stopCountdown();

    longButton.classList.add("btnActive", "noHover");
    pomoButton.classList.remove("btnActive", "noHover");
    shortButton.classList.remove("btnActive", "noHover");
    minutes.style.color = "white";
    seconds.style.color = "white";

    totalTime = 1800;      // 30 min in seconds
    minutes.value = 30;
    seconds.value = 0;
    formatTime();
}

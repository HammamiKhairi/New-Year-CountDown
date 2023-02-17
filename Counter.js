const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function countdown() {

    const now = new Date();

    // Calculate time difference in seconds
    const timeDiff = (new Date(`December 31, ${now.getFullYear()} 23:59:59`).getTime() - now.getTime()) / 1000;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / 3600 / 24);
    const hours = Math.floor((timeDiff % 86400) / 3600);
    const mins = Math.floor((timeDiff % 3600) / 60);
    const seconds = Math.floor(timeDiff % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);



let startTime;
let updatedTime;
let difference;
let timerInterval;

document.getElementById('start').onclick = function() {
    startTime = new Date().getTime();
    timerInterval = setInterval(showTime, 10);
}

document.getElementById('stop').onclick = function() {
    clearInterval(timerInterval);
}

document.getElementById('reset').onclick = function() {
    clearInterval(timerInterval);
    difference = 0;
    document.getElementById('display').innerHTML = "00:00:00";
}

function showTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('display').innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}
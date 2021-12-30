var slider = document.getElementById("progressBar");
var progress = document.getElementById("progress");

// Set start and end date
var endDate = new Date("Jan 14, 2022 10:00:00").getTime();
var startDate = new Date("Dec 30, 2021, 10:00:00").getTime();

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distanceWhole = endDate - startDate;
var distanceLeft = endDate - now;

// Time calculations for minutes and percentage progressed
var minutesLeft = Math.floor(distanceLeft / (1000 * 60));
var minutesTotal = Math.floor(distanceWhole / (1000 * 60));
var result = Math.floor(((minutesTotal - minutesLeft) / minutesTotal) * 100);

window.onload = function() {
    setInterval(addFrame, 100);
}

function addFrame() {
    if (result < 100) {
        progress.style.width = result + "%";
        progressnumber.innerHTML = result + "%";
    }
}
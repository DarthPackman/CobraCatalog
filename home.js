/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and rune the countdown clock */
function runClock() {
    /* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* Calculate the days until next month */
    var newMonth = new Date();
    newMonth.setMonth(newMonth.getMonth() + 1);
    newMonth.setDate(1);
    newMonth.setHours(0);
    newMonth.setMinutes(0);
    newMonth.setSeconds(0);
    newMonth.setMilliseconds(0);
    var daysLeft = (newMonth - currentDay) / (1000 * 60 * 60 * 24);

    /*Calculate the hours left in the current day */
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    /* Calculate the minutes and seconds left in the current hour */
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    /*Display the time left until New Year's Eve */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}
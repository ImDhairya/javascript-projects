const newYears = ("28 Sep 2023");

var days1 = document.getElementById('days')
var hours1 = document.getElementById('hours')
var minutes1 = document.getElementById('minutes')
var seconds1 = document.getElementById('seconds')

function countDown() {
  const newYearsDate = new Date (newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate-currentDate)/ 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds/ 3600) % 24;

  const minutes = (Math.floor(totalSeconds/60) % 24) % 60;

  const seconds = Math.floor(totalSeconds) % 60;

  console.log(days, hours, minutes, seconds);
  days1.innerHTML = formatTime(days);
  hours1.innerHTML = formatTime(hours);
  minutes1.innerHTML = formatTime(minutes);
  seconds1.innerHTML = formatTime(seconds);
}

setInterval(countDown,1000);
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

days = (countDown.days)
// Countdown Timer
// Set the date we're counting down to
let countDownDate = new Date("Dec 3, 2095 23:29:59").getTime();
// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="countdownTimer"

  document.getElementById("countdownTimer").textContent = `${days}:${
    hours < 10 ? `0` + hours : hours
  }:${minutes < 10 ? `0` + minutes : minutes}:${
    seconds < 10 ? `0` + seconds : seconds
  }`;
}, 0);

var clock = new Vue({
  el: "#clock",
  data: {
    time: "",
    date: "",
  },
});

var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
  var cd = new Date();
  clock.time =
    zeroPadding(cd.getHours(), 2) +
    ":" +
    zeroPadding(cd.getMinutes(), 2) +
    ":" +
    zeroPadding(cd.getSeconds(), 2);
  clock.date =
    week[cd.getDay()] +
    " " +
    zeroPadding(cd.getMonth() + 1, 2) +
    "/" +
    zeroPadding(cd.getDate(), 2) +
    "/" +
    zeroPadding(cd.getFullYear(), 4);
}

function zeroPadding(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}

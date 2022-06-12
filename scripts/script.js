// Selecting elements
const bannerClose = document.querySelector(".material-icons");
const bannerCloseAll = document.querySelector(".bannerbg");
const mainButtonShape = document.querySelector(`.shape`);
const mainH1 = document.querySelector(`.h1`);
const myProjects = document.querySelector(`.myProjects`);
const scrollMyProjects = document.querySelector(".scrollMyProjects");
const versionNumber = document.getElementById("version");
const pigGame = document.getElementById("pigGame");
const bankistApp = document.getElementById("bankistApp");
const jokeButton = document.querySelector(".jokeButton");
const refreshButton = document.querySelector(".glow-on-hover");
const bannerRemove = document.getElementById("removeBanner");
const path1 = document.querySelector(`.path1`);
const topnav = document.querySelector(`.topnav`);
const cloudbg = document.querySelector(`.cloudbg`);
// Functionality
// Closing the banner (X)
bannerClose.addEventListener(`click`, function () {
  this.closest(".banner").remove();
});
bannerCloseAll.addEventListener(`click`, function () {
  this.remove();
});

// Changing the Version color
versionNumber.addEventListener(`click`, function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  //Changes the version text color
  versionNumber.style.color = randomColor;
  // console.log(randomColor);
  //Also change the color of the blobs. Trying to find a way to pull in the randomColor variable into the SVG file > <stop id="stop1" stop-color="rgba(244.982, 109.92, 99.989, 1)" offset="0%"></stop>
});

// Blob Movements with D3.js
// path1.

//JokeAPI
// Defining the joke text as a placeholder
let jokeSetup = "";
let jokeDelivery = "";
// Setting up swal modal - using response from API Fetch to fill in the 2 potential pieces of the joke, "jokeSetup" & "jokeDelivery"
const jokeAlert = function JSalert() {
  swal({
    title: "Want to hear a funny joke?",
    text: `${jokeSetup}
    .....
    ${jokeDelivery}`,
    button: "haha",
  });
};
// When "Get Joke" is clicked we will fetch a new joke
const newJoke = jokeButton.addEventListener(
  `click`,
  //Using async allows us to load a new joke as we await our Fetch
  async function fetchJoke() {
    jokeSetup = jokeDelivery = "";
    const response = await fetch(
      `https://v2.jokeapi.dev/joke/Any?safe-mode`,
      {}
    )
      .then((data) => data.json())
      .then((data) => {
        // console.log(data.type);
        if (data.type === "twopart") {
          // alert(data.setup);
          jokeSetup = data.setup;
          jokeDelivery = data.delivery;
          // alert(data.delivery);
        } else {
          jokeSetup = data.joke;
          // alert(data.joke);
        }
      });
    jokeAlert();
  }
);

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

// H3 Collapse Toggle
// h1[0] should start open

document.querySelectorAll(`h3`).forEach((h3) => {
  h3.addEventListener(`click`, () => {
    // console.log(arrow);
    // console.log(`Clicked`);
    const accordionContent = h3.nextElementSibling;
    // console.log(accordionContent);
    h3.classList.toggle(`h3--active--after`);
    if (h3.classList.contains(`h3--active--after`)) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
      // h3.classList.toggle(`h3--active--after`);
    }
  });
  console.log(h3);
});

if (bannerCloseAll)
  document.addEventListener(`scroll`, function () {
    bannerCloseAll.remove();
  });

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  console.log(scrollY);
  if (this.scrollY > 700) {
    cloudbg.classList.remove(`sticky`);
  } else {
    cloudbg.classList.add(`sticky`);
  }
});

// Carousel onclicks
// Project 1
// bankistApp.addEventListener("click", function () {
//   window.open("bankistApp/index.html", "_blank");
//   console.log(`clicked`);
// });
// pigGame.addEventListener("click", function () {
//   window.open("PigGame/index.html", "_blank");
//   // document.location.href = "PigGame/index.html";
// });
// Project 2
// Project 3
// Project 4

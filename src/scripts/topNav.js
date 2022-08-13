const bannerCloseAll = document.querySelector(".bannerbg");
const versionNumber = document.getElementById("version");
const topnav = document.querySelector(`.topnav`);
const cloudbg = document.querySelector(`.cloudbg`);
const footer = document.querySelector(`.footer`);
const newsInput = document.querySelector(`#newsFeed`);

// Event Listener for removing topnav sticky class when scrolling down the page 700px scrollY or when Clicking on the banner (including X)
// if (bannerCloseAll) {
//   document.addEventListener(`scroll`, function () {
//     bannerCloseAll.remove();
//   });
//   bannerCloseAll.addEventListener(`click`, function () {
//     bannerCloseAll.remove();
//   });
// }

// Array of Search Terms
var searchTerms = [
  "tech",
  "computer science",
  "JavaScript",
  "programming",
  "computer vision",
  "cybersecurity",
  "business",
  "finance",
  "marketing",
  "data",
  "economics",
  "politics",
  "philosophy",
];

// function for generating a random search term
const generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * searchTerms.length);
  // console.log(randomNumber);
  return randomNumber;
};
generateRandomNumber();

// Changing the Version and Search Input color on click
versionNumber.addEventListener(`click`, function (e) {
  e.preventDefault;
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomNumber = Math.floor(Math.random() * searchTerms.length);
  //Changes the version text color
  versionNumber.style.color = randomColor;
  newsInput.style.color = randomColor;
  newsInput.value = searchTerms[randomNumber];
  return randomColor;
});

// window.addEventListener("scroll", () => {
//   if (this.scrollY > 300) {
//     cloudbg.classList.remove(`sticky`);
//     footer.classList.add(`footer-sticky`);
//   } else {
//     cloudbg.classList.add(`sticky`);
//     footer.classList.remove(`footer-sticky`);
//   }
// });

// Debounce Function for scroll listener on Window
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// window.addEventListener(
//   "scroll",
//   debounce(() => {
//     const topNavLower = document.querySelector(`.bg`).classList;
//     let scrollY = this.scrollY;
//     if (scrollY > 200) {
//       topNavLower.add("is-hidden");
//     } else {
//       topNavLower.remove("is-hidden");
//     }
//   })
// );

// window.addEventListener(
//   "scroll",
//   debounce(() => {
//     const topBorder = document.querySelector(`.topborderAngle`).classList;
//     let scrollY = this.scrollY;
//     if (scrollY > 200) {
//       topBorder.add("is-hidden");
//     } else {
//       topBorder.remove("is-hidden");
//     }
//   })
// );

window.addEventListener(
  "scroll",
  debounce(() => {
    const topBackground = document.querySelector(`.backgroundimage-main`);
    const topNavBackground = document.querySelector(`.bg`);
    const topNav = document.querySelector(`.topnav`);
    const topBorder = document.querySelector(`.topborder`);
    const topBorder2 = document.querySelector(`.topborderAngle`);

    let scrollY = this.scrollY;
    if (scrollY > 200) {
      topBackground.classList.remove("cloudbg");
      topNavBackground.classList.add("hide");
      topNav.classList.add("blur");
      topNavBackground.style.background = "rgba(11, 17, 44, .95)";
      topBorder.classList.add("hide");
      topBorder2.classList.add("hide");
    } else {
      topBackground.classList.add("cloudbg");
      topNavBackground.classList.remove("hide");
      topNav.classList.remove("blur");
      topNavBackground.style.background = "";
      topBorder.classList.remove("hide");
      topBorder2.classList.remove("hide");
    }
  })
);

const trigger = document.querySelector(`.fa-bars`);
const target = document.querySelector(`.toggle-mobile-top-nav`);
let defaultDisplay = window
  .getComputedStyle(target)
  .getPropertyValue("display");
const toggleDisplay = function () {
  if (!target || !trigger) return;

  target.style.display =
    target.style.display == defaultDisplay ? "block" : defaultDisplay;
};

const toggleAnimation = function () {
  if (!trigger.classList.contains("open-mobile-menu-animation")) {
    // If the mobile menu is open, I want to change the color of the trigger and rotate 90deg
    console.log("Add class");
    trigger.style.color = "#fa7268";
    trigger.style.backgroundColor = "#ffffff80";
    trigger.style.backgroundFilter = "blur(20px)";
    trigger.classList.add("open-mobile-menu-animation");
    trigger.classList.remove("close-mobile-menu-animation");
  } else {
    trigger.style.color = "#ffffff";
    trigger.style.backgroundColor = "";
    trigger.style.backgroundFilter = "blur(0px)";
    trigger.classList.remove("open-mobile-menu-animation");
    trigger.classList.add("close-mobile-menu-animation");
    console.log("Remove class");
  }
};

trigger.addEventListener("click", () => {
  toggleDisplay();
  toggleAnimation();
});

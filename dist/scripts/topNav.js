"use strict";

const bannerCloseAll = document.querySelector(".bannerbg");
const versionNumber = document.getElementById("version");
const topnav = document.querySelector(`.topnav`);
const cloudbg = document.querySelector(`.cloudbg`);
const footer = document.querySelector(`.footer`);
const newsInput = document.querySelector(`#newsFeed`); // Event Listener for removing topnav sticky class when scrolling down the page 700px scrollY or when Clicking on the banner (including X)
// if (bannerCloseAll) {
//   document.addEventListener(`scroll`, function () {
//     bannerCloseAll.remove();
//   });
//   bannerCloseAll.addEventListener(`click`, function () {
//     bannerCloseAll.remove();
//   });
// }
// Array of Search Terms

var searchTerms = ["tech", "computer science", "JavaScript", "programming", "computer vision", "cybersecurity", "business", "finance", "marketing", "data", "economics", "politics", "philosophy"]; // function for generating a random search term

const generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * searchTerms.length); // console.log(randomNumber);

  return randomNumber;
};

generateRandomNumber(); // Changing the Version and Search Input color on click

versionNumber.addEventListener(`click`, function (e) {
  e.preventDefault;
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomNumber = Math.floor(Math.random() * searchTerms.length); //Changes the version text color

  versionNumber.style.color = randomColor;
  newsInput.style.color = randomColor;
  newsInput.value = searchTerms[randomNumber];
  return randomColor;
}); // window.addEventListener("scroll", () => {
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
} // window.addEventListener(
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


window.addEventListener("scroll", debounce(() => {
  const topBackground = document.querySelector(`.backgroundimage-main`);
  const topNavBackground = document.querySelector(`.bg`);
  const topNav = document.querySelector(`.topnav`);
  const topBorder = document.querySelector(`.topborder`);
  const topBorder2 = document.querySelector(`.topborderAngle`);
  let scrollY = (void 0).scrollY;

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
})); // Click Event for mobile nav button | with animation

const triggerMenu = document.querySelector(`.fa-bars`);
const targetMenuOpen = document.querySelector(`.toggle-mobile-top-nav`);

const toggleOpen = function () {
  triggerMenu.classList.toggle("open-mobile-menu-animation");
};

const toggleClose = function () {
  triggerMenu.classList.toggle("close-mobile-menu-animation");
};

const toggleAnimation = function () {
  if (triggerMenu.style.display === "none") {
    targetMenuOpen.style.zIndex = "10005";
    targetMenuOpen.style.display = "block";
    triggerMenu.style.color = "#fa7268";
    triggerMenu.style.backgroundColor = "#ffffff80";
    triggerMenu.style.backgroundFilter = "blur(20px)";
    toggleOpen();
  } else {
    targetMenuOpen.style.zIndex = "-1";
    targetMenuOpen.style.display = "none";
    triggerMenu.style.color = "#ffffff";
    triggerMenu.style.backgroundColor = "";
    triggerMenu.style.backgroundFilter = "blur(0px)";
    toggleClose();
  }
};

triggerMenu.addEventListener("click", toggleAnimation());
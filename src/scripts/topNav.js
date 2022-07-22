const bannerCloseAll = document.querySelector(".bannerbg");
const versionNumber = document.getElementById("version");
const topnav = document.querySelector(`.topnav`);
const cloudbg = document.querySelector(`.cloudbg`);
const footer = document.querySelector(`.footer`);

// Event Listener for removing topnav sticky class when scrolling down the page 700px scrollY or when Clicking on the banner (including X)
// if (bannerCloseAll) {
//   document.addEventListener(`scroll`, function () {
//     bannerCloseAll.remove();
//   });
//   bannerCloseAll.addEventListener(`click`, function () {
//     bannerCloseAll.remove();
//   });
// }

// Changing the Version color on click
versionNumber.addEventListener(`click`, function (e) {
  e.preventDefault;
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  //Changes the version text color
  versionNumber.style.color = randomColor;
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

window.addEventListener(
  "scroll",
  debounce(() => {
    const topNavLower = document.querySelector(`.bg`).classList;
    let scrollY = this.scrollY;
    if (scrollY > 100) {
      topNavLower.add("is-hidden");
    } else {
      topNavLower.remove("is-hidden");
    }
  })
);

const trigger = document.querySelector(`.fa-bars`);
const target = document.querySelector(`.toggle-mobile-top-nav`);
const toggleDisplay = (target, trigger) => {
  if (!target || !trigger) return;

  // let defaultDisplay = window
  //   .getComputedStyle(target)
  //   .getPropertyValue("display");
  trigger.addEventListener("click", () => {
    target.style.display = target.style.display == "none" ? "block" : "none";
  });
};

// if (!trigger.classList.contains("open")) {
//   // If the mobile menu is open, I want to change the color of the trigger and rotate 90deg
//   console.log("Add class");
//   // trigger.style.color = "#c62368";
//   trigger.classList.add("open");
// } else {
//   // trigger.style.color = "#ffffff";
//   trigger.classList.remove("open");
//   console.log("Remove class");
// }

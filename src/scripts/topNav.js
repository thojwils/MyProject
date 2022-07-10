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
});

// window.addEventListener("scroll", () => {
//   if (this.scrollY > 500) {
//     cloudbg.classList.remove(`sticky`);
//     footer.classList.add(`footer-sticky`);
//   } else {
//     cloudbg.classList.add(`sticky`);
//     footer.classList.remove(`footer-sticky`);
//   }
// });

const mobileMenuIcon = document.querySelector(`.fa-bars`);
const mobileMenu = document.querySelector(`.toggle-mobile-top-nav`);

mobileMenuIcon.addEventListener("click", function () {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});

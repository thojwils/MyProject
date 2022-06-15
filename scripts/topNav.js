const bannerClose = document.querySelector(".material-icons");
const bannerCloseAll = document.querySelector(".bannerbg");
const versionNumber = document.getElementById("version");
const topnav = document.querySelector(`.topnav`);
const cloudbg = document.querySelector(`.cloudbg`);

// Closing the banner (X)
bannerClose.addEventListener(`click`, function () {
  this.closest(".banner").remove();
});
bannerCloseAll.addEventListener(`click`, function () {
  this.remove();
});

// Changing the Version color on click
versionNumber.addEventListener(`click`, function (e) {
  e.preventDefault;
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  //Changes the version text color
  versionNumber.style.color = randomColor;
});

// Event Listener for removing topnav sticky class when scrolling down the page 700px scrollY
if (bannerCloseAll)
  document.addEventListener(`scroll`, function () {
    bannerCloseAll.remove();
  });

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  if (this.scrollY > 700) {
    cloudbg.classList.remove(`sticky`);
  } else {
    cloudbg.classList.add(`sticky`);
  }
});

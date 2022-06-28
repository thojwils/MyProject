"use strict";

var _this = void 0;

var bannerClose = document.querySelector(".material-icons");
var bannerCloseAll = document.querySelector(".bannerbg");
var versionNumber = document.getElementById("version");
var topnav = document.querySelector(".topnav");
var cloudbg = document.querySelector(".cloudbg"); // Closing the banner (X)

bannerClose.addEventListener("click", function () {
  this.closest(".banner").remove();
});
bannerCloseAll.addEventListener("click", function () {
  this.remove();
}); // Changing the Version color on click

versionNumber.addEventListener("click", function (e) {
  e.preventDefault;
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); //Changes the version text color

  versionNumber.style.color = randomColor;
}); // Event Listener for removing topnav sticky class when scrolling down the page 700px scrollY

if (bannerCloseAll) document.addEventListener("scroll", function () {
  bannerCloseAll.remove();
});
window.addEventListener("scroll", function (event) {
  var scrollY = _this.scrollY;

  if (_this.scrollY > 700) {
    cloudbg.classList.remove("sticky");
  } else {
    cloudbg.classList.add("sticky");
  }
});
var mobileMenuIcon = document.querySelector(".fa-bars");
var mobileMenu = document.querySelector(".toggle-mobile-top-nav");
mobileMenuIcon.addEventListener("click", function () {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }

  console.log("TEST");
});
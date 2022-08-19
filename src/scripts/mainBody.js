"use strict";

// H3 Collapse Toggle
const header1 = document.querySelector(`#header1`);
const header2 = document.querySelector(`#header2`);
const header3 = document.querySelector(`#header3`);
const accordionContent1 = header1.nextElementSibling;
const accordionContent2 = header2.nextElementSibling;
const accordionContent3 = header3.nextElementSibling;

const toggleHeight = function (el) {
  if (!el.previousElementSibling.classList.contains("tab-open")) {
    el.style.maxHeight = el.scrollHeight + "px";
  } else {
    el.style.maxHeight = 0;
  }
};

const toggleClass = function (el) {
  el.classList.toggle("tab-open");
};

header1.addEventListener(`click`, () => {
  toggleHeight(accordionContent1);
  toggleClass(header1);
});
header2.addEventListener(`click`, () => {
  toggleHeight(accordionContent2);
  toggleClass(header2);
});
header3.addEventListener(`click`, () => {
  toggleHeight(accordionContent3);
  toggleClass(header3);
});
//Scrolling down to projects section and adding a little bit of px height between
const naviagtionHeight = document.querySelector(`.topnav`).offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  naviagtionHeight + "px"
);

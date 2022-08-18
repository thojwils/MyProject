"use strict"; // H3 Collapse Toggle

const header1 = document.querySelector(`#header1`);
const header2 = document.querySelector(`#header2`);
const header3 = document.querySelector(`#header3`);
const accordionContent1 = header1.nextElementSibling;
const accordionContent2 = header2.nextElementSibling;
const accordionContent3 = header3.nextElementSibling;

const toggleHeight = function (el) {
  if (!el.classList.contains("extend-text")) {
    el.style.maxHeight = el.scrollHeight + "px";
  } else {
    el.style.maxHeight = 0;
  }
};

header1.addEventListener(`click`, toggleHeight(header1));
header2.addEventListener(`click`, toggleHeight(header2));
header3.addEventListener(`click`, toggleHeight(header3)); //Scrolling down to projects section and adding a little bit of px height between

const naviagtionHeight = document.querySelector(`.topnav`).offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", naviagtionHeight + "px");
"use strict"; // H3 Collapse Toggle
//      h1[0] should start open (added class on HTML element by default)

const header1 = document.querySelector(`#header1`);
header1.addEventListener(`click`, () => {
  const accordionContent1 = header1.nextElementSibling;

  if (!header1.classList.contains(`extend-text`)) {
    header1.classList.add(`extend-text`);
    accordionContent1.style.maxHeight = accordionContent1.scrollHeight + "px";
  } else {
    accordionContent1.style.maxHeight = 0;
    header1.classList.remove(`extend-text`);
  }
});
const header2 = document.querySelector(`#header2`);
header2.addEventListener(`click`, () => {
  const accordionContent1 = header2.nextElementSibling;

  if (!header2.classList.contains(`extend-text`)) {
    header2.classList.add(`extend-text`);
    accordionContent1.style.maxHeight = accordionContent1.scrollHeight + "px";
  } else {
    accordionContent1.style.maxHeight = 0;
    header2.classList.remove(`extend-text`);
  }
});
const header3 = document.querySelector(`#header3`);
header3.addEventListener(`click`, () => {
  const accordionContent1 = header3.nextElementSibling;

  if (!header3.classList.contains(`extend-text`)) {
    header3.classList.add(`extend-text`);
    accordionContent1.style.maxHeight = accordionContent1.scrollHeight + "px";
  } else {
    accordionContent1.style.maxHeight = 0;
    header3.classList.remove(`extend-text`);
  }
}); //Scrolling down to projects section and adding a little bit of px height between

const naviagtionHeight = document.querySelector(`.topnav`).offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", naviagtionHeight + "px");
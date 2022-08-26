"use strict";
// H3 Collapse Toggle
const header1 = document.querySelector("#header1");
const header2 = document.querySelector("#header2");
const header3 = document.querySelector("#header3");
const accordionContent1 = header1.nextElementSibling;
const accordionContent2 = header2.nextElementSibling;
const accordionContent3 = header3.nextElementSibling;

// Toggle header IDs to add px scroll height to match the height of the text block

if (document.readyState === "complete") {
  header1.addEventListener("click", function () {
    accordionContent1.classList.toggle("tab-open");
    if (accordionContent1.classList.contains("tab-open")) {
      accordionContent1.style.maxHeight = accordionContent1.scrollHeight + "px";
    } else {
      accordionContent1.style.maxHeight = "0px";
    }
  });

  header2.addEventListener("click", function () {
    accordionContent2.classList.toggle("tab-open");
    if (accordionContent2.classList.contains("tab-open")) {
      accordionContent2.style.maxHeight = accordionContent2.scrollHeight + "px";
    } else {
      accordionContent2.style.maxHeight = "0px";
    }
  });

  header3.addEventListener("click", function () {
    accordionContent3.classList.toggle("tab-open");
    if (accordionContent3.classList.contains("tab-open")) {
      accordionContent3.style.maxHeight = accordionContent3.scrollHeight + "px";
    } else {
      accordionContent3.style.maxHeight = "0px";
    }
  });
}

// const toggleClass = function (el) {
//   el.classList.toggle("tab-open");
// };

// header1.addEventListener(`click`, toggleHeight(header1));
// header2.addEventListener(`click`, toggleHeight(header2));
// header3.addEventListener(`click`, toggleHeight(header3));

// header1.addEventListener(`click`, () => {
//   toggleHeight(accordionContent1);
//   toggleClass(header1);
// });
// header2.addEventListener(`click`, () => {
//   toggleHeight(accordionContent2);
//   toggleClass(header2);
// });
// header3.addEventListener(`click`, () => {
//   toggleHeight(accordionContent3);
//   toggleClass(header3);
// });
//Scrolling down to projects section and adding a little bit of px height between
const naviagtionHeight = document.querySelector(`.topnav`).offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  naviagtionHeight + "px"
);

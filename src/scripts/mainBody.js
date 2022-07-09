// H3 Collapse Toggle
//      h1[0] should start open (added class on HTML element by default)
const header1 = document.querySelector(`#header1`);
const header2 = document.querySelector(`#header2`);
const header3 = document.querySelector(`#header3`);

header1.addEventListener(`click`, () => {
  const accordionContent1 = header1.nextElementSibling;
  header1.classList.toggle(`h2--active--after`);
  if (header1.classList.contains(`h2--active--after`)) {
    accordionContent1.style.maxHeight = accordionContent1.scrollHeight + "px";
  } else {
    accordionContent1.style.maxHeight = 0;
  }
});
header2.addEventListener(`click`, () => {
  const accordionContent1 = header2.nextElementSibling;
  header2.classList.toggle(`h2--active--after`);
  if (header2.classList.contains(`h2--active--after`)) {
    accordionContent1.style.maxHeight = accordionContent1.scrollHeight + "px";
  } else {
    accordionContent1.style.maxHeight = 0;
  }
});
header3.addEventListener(`click`, () => {
  const accordionContent1 = header3.nextElementSibling;
  header3.classList.toggle(`h2--active--after`);
  if (header3.classList.contains(`h2--active--after`)) {
    accordionContent1.style.maxHeight = accordionContent1.scrollHeight + "px";
  } else {
    accordionContent1.style.maxHeight = 0;
  }
});

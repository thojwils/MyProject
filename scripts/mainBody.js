// H3 Collapse Toggle
//      h1[0] should start open (added class on HTML element by default)
document.querySelectorAll(`h3`).forEach((h3) => {
  h3.addEventListener(`click`, () => {
    const accordionContent = h3.nextElementSibling;
    h3.classList.toggle(`h3--active--after`);
    if (h3.classList.contains(`h3--active--after`)) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

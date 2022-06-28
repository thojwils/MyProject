"use strict";

// H3 Collapse Toggle
//      h1[0] should start open (added class on HTML element by default)
document.querySelectorAll("h2").forEach(function (h2) {
  h2.addEventListener("click", function () {
    var accordionContent = h2.nextElementSibling;
    h2.classList.toggle("h2--active--after");

    if (h2.classList.contains("h2--active--after")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
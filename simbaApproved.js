"use strict";
const catRescue = document.querySelector(`.simba-approved`);
const simbaApproved = function () {
  alert(`Simba Approves`);
  window.open(
    "https://www.google.com/search?q=cat+rescue+shelters+near+me",
    "_blank"
  );
};
catRescue.addEventListener(`click`, simbaApproved);

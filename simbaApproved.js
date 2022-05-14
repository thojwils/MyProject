"use strict";

const catRescue = document.querySelector(`.simba-approved`);
const simbaApproved = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    imageUrl: "/simbaPics/simba_stretch_thumbnail.jpg",
    icon: "success",
    title: "Simba meows in approval. <br> New tab opening in Google!",
  });
};
const showPosition = function () {
  setTimeout(() => {
    window.open(
      "https://www.google.com/search?q=cat+rescue+shelters+near+me",
      "_blank"
    );
  }, 2000);
};
catRescue.addEventListener(`click`, simbaApproved);

// Gif toggle
const catGif = document.querySelector(`.catGif`);

//Show Gif
const toggleSwitch = document.querySelector(`.slider`);
let num = 0;
toggleSwitch.addEventListener(`click`, function () {
  num++;
  console.log(num);
  if (num % 2 == 0) {
    catGif.classList.remove(`show`);
    catGif.classList.add(`hide`);
  } else {
    catGif.classList.add(`show`);
    catGif.classList.remove(`hide`);
  }
});

// Swap out if conditional contains classlist
// if (num % 2 == 0) {
//   catGif.classList.remove(`show`);
//   catGif.classList.add(`hide`);
// } else {
//   catGif.classList.add(`show`);
//   catGif.classList.remove(`hide`);
// }

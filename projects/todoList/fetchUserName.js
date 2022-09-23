"use strict";
console.log("page loaded");
const userNameButton = document.getElementById("userNameButton");
const userNameTitle = document.getElementById("");
let userName;
// Change Title function
const changeTitle = function () {
  console.log("change title");
  userName = localStorage.getItem("User Name");
  document.querySelector(".todo-title").innerHTML = `${userName}'s Todo List`;
};
changeTitle();
const jokeAlert = function JSalert() {
  function getInput(cb) {
    swal("What is your name?", {
      content: "input",
    }).then((userName) => {
      swal(`Your name is ${userName}!`);
      if (userName) {
        localStorage.setItem("User Name", userName);
        changeTitle();
        return cb(userName);
      }
    });
  }
  function main(input) {
    console.log(input);
  }

  getInput(main);
};

function addName() {
  jokeAlert();
}
userNameButton.addEventListener("click", addName);

//JokeAPI
const jokeButton = document.querySelector(".jokeButton");
const mobileJoke = document.querySelector(".mobile-joke-button");
// Defining the joke text as a placeholder
let jokeSetup = "";
let jokeDelivery = "";
// Setting up swal modal - using response from API Fetch to fill in the 2 potential pieces of the joke, "jokeSetup" & "jokeDelivery"
const jokeAlert = function JSalert() {
  swal({
    title: "Want to hear a funny joke?",
    text: `${jokeSetup}
    .....
    ${jokeDelivery}`,
    button: "Close",
  });
};

const fetchJoke = async function () {
  jokeSetup = jokeDelivery = "";
  await fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`, {})
    .then((data) => data.json())
    .then((data) => {
      // console.log(data.type);
      if (data.type === "twopart") {
        // alert(data.setup);
        jokeSetup = data.setup;
        jokeDelivery = data.delivery;
        // alert(data.delivery);
      } else {
        jokeSetup = data.joke;
        // alert(data.joke);
      }
      jokeAlert();
    });
};

if (jokeButton.getAttribute("listener") !== "true") {
  jokeButton.addEventListener("click", function (e) {
    fetchJoke();
    const elementClicked = e.target;
    elementClicked.setAttribute("listener", "true");
  });
}

if (mobileJoke.getAttribute("listener") !== "true") {
  mobileJoke.addEventListener("click", function (e) {
    fetchJoke();
    const elementClickedMobile = e.target;
    elementClickedMobile.setAttribute("listener", "true");
  });
}

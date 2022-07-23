//JokeAPI
const jokeButton = document.querySelector(".jokeButton");
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
    button: "haha",
  });
};
// When "Get Joke" is clicked we will fetch a new joke
if (jokeButton) {
  const newJoke = jokeButton.addEventListener(
    `click`,
    //Using async allows us to load a new joke as we await our Fetch
    async function fetchJoke() {
      jokeSetup = jokeDelivery = "";
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/Any?safe-mode`,
        {}
      )
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
        });
      jokeAlert();
    }
  );
} else {
  console.log(`Increase screen width > 600px to use JokeAPI feature.`);
}

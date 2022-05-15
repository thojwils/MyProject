//techcrunch.vercel.app/articles?tag={tag-name}

// Code for fetching stocks

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
//     "X-RapidAPI-Key": "882f8ea9a8msh2a1982cd5a5a8b3p124b8ajsncc453bc41177",
//   },
// };

// fetch(
//   "https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

//News API

// Generate new Date to plug into the fetch so that it is always pulling current news
const dateToday = new Date();
let searchTerm = "Tech";
//Need to create an input field to plug into the q="term&" query
const todaysNews =
  "https://newsapi.org/v2/everything?" +
  //Need to figure out how to input from form
  `q=${searchTerm}&` +
  `from=${dateToday}&` +
  "sortBy=popularity&" +
  "apiKey=7b1e6e2a55ea4718b0451d26964d3e38";

// Attach to button attached to an input form.
let articles = "";
// Request to the api.
async function getResponse() {
  const response = await fetch(
    "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar"
  );
}

const fetchNews = async () => {
  try {
    const res = await fetch(todaysNews);
    console.log(res.ok);
    const data = await res.json();
    const articles = data.articles;
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {}
    return data;
  } catch (err) {
    console.error(err);
    // .then((data) => data.json())
    // .then((data) => {
    //   // parsing out the articles generated from the fetch.
    //   articles = [...data.articles];
    // });
  }
};

const newsInput = document.querySelector(`.news-input`);
// Run this function on input confirmation (enter button or button click (need to add a new button first))
fetchNews();

// Calls on input in search bar
// newsInput.fetchNews();

//Check for response to be there.
// const renderNews = function render() {
//   //this.props.phone contains the objects "Samsung", "iPhone", and "Google"
//   return Object.entries(data).map(([title, url]) => {
//     console.log(title);
//     console.log(url);
//     return { title }, { url };
//   });
// };
// // Render results in HTML to the DOM.
// renderNews();
// Pagination / show more feature to load the next batch of articles

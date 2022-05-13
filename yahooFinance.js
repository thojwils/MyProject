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
const tech = "Apple";
//Need to create an input field to plug into the q="term&" query
const todaysNews =
  "https://newsapi.org/v2/everything?" +
  //Need to figure out how to input from form
  `q=${tech}&` +
  `from=${dateToday}&` +
  "sortBy=popularity&" +
  "apiKey=7b1e6e2a55ea4718b0451d26964d3e38";

// Attach to button attached to an input form.

// Request to the api.
async function fetchNews() {
  let articles = "";
  await fetch(todaysNews)
    .then((data) => data.json())
    .then((data) => {
      // parsing out the articles generated from the fetch.
      articles = [...data.articles];
    });
  console.log(...[articles]);
}

// Calls on input in search bar
const newsInput = document.querySelector(`.news-input`);
fetchNews();

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
// async function getResponse() {
//   const response = await fetch(todaysNews);
//   const data = await response.json();
//   const articles = data.articles;
//   console.log(response);
// }
// getResponse();
const fetchNews = async () => {
  try {
    const res = await fetch(todaysNews);
    console.log(res.ok);
    const data = await res.json();
    const articles = data.articles;
    console.log(articles);
    for (let i = 0; i < 6; i++) {
      console.log([articles[i].title, articles[i].url]);
      const news = [articles[i].title, articles[i].url];
      const newsFeed = document.querySelector(`#newsFeedStart`);
      newsFeed.insertAdjacentHTML(
        `afterbegin`,
        // Swap out with actual news references once styling is in place
        // `<div onclick="location.href = '${articles[i].url}'" class="news_feed" id="${i}" >
        // <h4>
        // ${articles[i].title}
        // </h4>
        // <img src="${articles[i].urlToImage}" class="news_hero">
        // </div>`
        `<div onclick="location.href = '${articles[i].url}'" class="news_container" id="${i}">
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600">
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Search Term</span>
      <h4>${articles[i].title}</h4>
      <p>Description?</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <div class="author__info">
          <h4>${articles[i].author}</h4>
          <small>${articles[i].publishedAt}</small>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
<hr class="topborderAngle"></hr>
</div>`
      );
    }
    return articles;
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

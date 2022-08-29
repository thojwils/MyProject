"use strict";
//News API
// Global Variables
const searchInput = document.querySelector(`.news-input`);
const newsFeed = document.querySelector("#newsFeed");
const dateToday = new Date();
let searchTerm = ""; // How should I capture this parameter from the input of the searchInput field? I need this to read from the event listener (enter submit).
let articles = "";
// API URL Request
// Bing News API
const imageQualityWarning = function () {};

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}

const options = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    "X-RapidAPI-Key": "882f8ea9a8msh2a1982cd5a5a8b3p124b8ajsncc453bc41177",
  },
};
const fetchNews = async () => {
  try {
    const res = await fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?" +
        `q=${searchTerm}` +
        `&freshness=Day&textFormat=Raw&safeSearch=Strict`,
      options
    );
    // News API Version
    // const fetchNews = async () => {
    //   try {
    //     const res = await fetch(
    //       "https://newsapi.org/v2/everything?" +
    //         `q=${searchTerm}&` +
    //         `from=${dateToday}&` +
    //         "sortBy=popularity&" +
    //         "apiKey=7b1e6e2a55ea4718b0451d26964d3e38"
    //     );
    const data = await res.json();
    const articles = data.value;
    //Time for calc hours since post

    for (let i = 0; i < 20; i++) {
      console.log(articles[i]);
      // console.log([articles[i].title, articles[i].url]);
      // const news = [articles[i].title, articles[i].url];
      const start = new Date(dateToday).getTime();
      const endDate = articles[i].datePublished;
      const end = new Date(endDate).getTime();
      const milliseconds = Math.abs(end - start).toString();
      const seconds = parseInt(milliseconds / 1000);
      const minutes = parseInt(seconds / 60);
      const hours = parseInt(minutes / 60);
      const time =
        hours > 0
          ? (hours % 24) + " hour's ago"
          : (minutes % 60) + " minute's ago";
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
        `<div onclick="window.open('${
          articles[i].url
        }')" class="news_container" id="${i}">
  <div class="card">
    <div class="card__header">
     <div class="tooltip">
     <span class="tooltiptext">Images appear blurry from API. There is a better API that is premium and has high quality images. Using this as a way to show hover text :)</span>
     <img src="${
       articles[i].image.thumbnail.contentUrl
     }" alt="" onmousehover="imageQualityWarning" class="card__image" width="600">
     </div>  
    </div>
    <div class="card__body">
    <div>
    <span id="left" class="tag tag-blue">${
      articles[i].category ? articles[i].category : "Uncategorized"
    }</span>
    <span id="right" class="tag tag-red">${searchTerm}</span>
    </div>  
      <h6>${
        articles[i].name.length > 80
          ? articles[i].name.substring(0, 80) + "..."
          : articles[i].name
      }</h6>
    </div>
    <div class="card__footer">
      <div class="user">
        <div class="author__info">
          <h5>Source: <strong>${articles[i].provider[0].name}</strong></h5>
          <small>${time}</small>
        </div>
      </div>
    </div>
  </div>
</div>
<div>
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
try {
  searchInput.parentElement.addEventListener(`keypress`, function (e) {
    if (e.key === "Enter") {
      searchTerm = searchInput.value;
      fetchNews();
      window.scroll(0, findPos(document.getElementById("newsFeedStart")));
    }
  });
} catch (error) {
  console.error(error);
}
newsFeed.addEventListener("click", function () {
  if (document.activeElement === newsFeed) {
    newsFeed.placeholder = "";
  }
});

// Run this function on input confirmation (enter button or button click (need to add a new button first))
// Calls on input in search bars
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

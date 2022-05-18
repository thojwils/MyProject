//News API
// Global Variables
const searchInput = document.querySelector(`.news-input`);
const dateToday = new Date();
let searchTerm = ""; // How should I capture this parameter from the input of the searchInput field? I need this to read from the event listener (enter submit).
let articles = "";
// API URL Request
const fetchNews = async () => {
  try {
    const res = await fetch(
      "https://newsapi.org/v2/everything?" +
        `q=${searchTerm}&` +
        `from=${dateToday}&` +
        "sortBy=popularity&" +
        "apiKey=7b1e6e2a55ea4718b0451d26964d3e38"
    );
    console.log(res.ok);
    const data = await res.json();
    const articles = data.articles;
    console.log(articles);
    //Time for calc hours since post

    for (let i = 0; i < 20; i++) {
      // console.log([articles[i].title, articles[i].url]);
      // const news = [articles[i].title, articles[i].url];
      const start = new Date(dateToday).getTime();
      const endDate = data.articles[i].publishedAt;
      const end = new Date(endDate).getTime();
      const milliseconds = Math.abs(end - start).toString();
      const seconds = parseInt(milliseconds / 1000);
      const minutes = parseInt(seconds / 60);
      const hours = parseInt(minutes / 60);
      const time = (hours % 24) + " hour's ago";
      // console.log(time);
      // let timeDif = today - articles[i].publishedAt;
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
        `<div onclick="window.open('${articles[i].url}')" class="news_container" id="${i}">
  <div class="card">
    <div class="card__header">
      <img src="${articles[i].urlToImage}" alt="" class="card__image" width="600">
    </div>
    <div class="card__body">
      <span class="tag tag-blue">${searchTerm}</span>
      <h6>${articles[i].title}</h6>
    </div>
    <div class="card__footer">
      <div class="user">
        <div class="author__info">
          <h5>Written by: ${articles[i].author}</h5>
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

searchInput.addEventListener(`keypress`, function (e) {
  if (e.key === "Enter") {
    searchTerm = searchInput.value;
    fetchNews();
  }
});
// Run this function on input confirmation (enter button or button click (need to add a new button first))
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

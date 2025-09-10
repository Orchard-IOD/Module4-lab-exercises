let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

// get news with promise
const getNewsStories = () => {
  return new Promise((res) => {
    res(news);
  });
};

// clear container and render news stories
const renderNews = () => {
  // clear container
  document.getElementById("news-stories").innerHTML = "";
  // get news
  getNewsStories();
  // loop over array and call addStory per story
  news.forEach((item) => {
    addStory(item);
  });
};

// add news item via template clones
const addStory = (item) => {
  // get template to clone
  const template = document.getElementById('news-template')
                    .content.cloneNode(true);
  // populate template clone with data
  template.querySelector('.card-title').innerText = item.title;
  template.querySelector('.card-text').innerText = item.description;
  document.getElementById('news-stories').appendChild(template);
}

// initial render
renderNews();

// check news every 5 seconds
setInterval(renderNews, 5000)
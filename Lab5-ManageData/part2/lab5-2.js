// array of news item
let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

// add news article to array
const addToNewsArray = (e) => {
  // prevent form submission
  e.preventDefault();
  // get form data
  const title = e.target.title.value;
  const description = e.target.description.value;
  // create article index
  const lastArticleIndex = news[news.length - 1]["id"];
  // push new article into news array
  news.push({
    id: lastArticleIndex + 1,
    title: title,
    description: description,
  });
};

// immitate an asynch data request and response
const getNewsItems = () => {
  return new Promise((resolve) => {
    resolve(news);
  });
};

// clear then render news items
const renderNewsItems = () => {
  // get and clear news container
  document.getElementById("news-items").innerHTML = "";
 
  // getNewsItems() then call addNewsItem
  getNewsItems().then((items) => {
    items.forEach((item) => {
      addNewsItem(item);
    });
  });
};

// add a news article using template
const addNewsItem = (item) => {
  // get template to clone
  const template = document
    .getElementById("news-template")
    .content.cloneNode(true);
  // populate clone with data
  template.querySelector(".card-title").innerText = item.title;
  template.querySelector(".card-text").innerText = item.description;
  // append to news-items container
  document.getElementById("news-items").appendChild(template);
};

// initial render
renderNewsItems();

// setInterval to render news
setInterval(renderNewsItems, 5000);


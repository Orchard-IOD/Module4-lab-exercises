
fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((json) => {
    renderData(json);
    console.log(json);
  });

const renderData = (data) => {
  // get-clear data container
  document.getElementById("json-posts-container").innerHTML = "";

  // call addPost() with data
  data.forEach((post) => {
    addPost(post);
  });
};

const addPost = (post) => {
  // get-clone template
  const template = document
    .getElementById("post-template")
    .content.cloneNode(true);
  //   poulate clone-templates with data
  template.querySelector(".card-title").innerText = post.title;
  template.querySelector(".card-text").innerText = post.body;
  // append-display data
  document.getElementById("json-posts-container").appendChild(template);
};

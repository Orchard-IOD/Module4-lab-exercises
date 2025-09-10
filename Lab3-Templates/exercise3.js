const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/4365 32/1671316/main-image",
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp- content/uploads/2020/11/White-house-night-van-goh-worldwide- 2.jpg",
    },
  ],
};

function addArtist({ name, portfolio }) {
  // clone the template
  const outerTemplate = document
    .getElementById("outer-template")
    .content.cloneNode(true);
  // populate the template
  outerTemplate.querySelector(".outer-card-title").innerText = name;

  // Get inner-template inside the cloned outer template
  const innerTemplate = outerTemplate.querySelector(".inner-template");

  // Get the card body where inner-templates are to be appended
  const outerCardBody = outerTemplate.querySelector(".outer-card-body");

   // loop through portfolio and create an innner-template for each
  portfolio.forEach(({ title, url }) => {
    const innerClone = innerTemplate.content.cloneNode(true);
    innerClone.querySelector(".inner-card-title>span:nth-of-type(2)").innerText = title;
    innerClone.querySelector(".inner-card-body>span:nth-of-type(2)").innerText = url;
    outerCardBody.appendChild(innerClone);
  });
  // include the populated template into the page
  document.querySelector("#card-list").appendChild(outerTemplate);
 
}

addArtist(artist);

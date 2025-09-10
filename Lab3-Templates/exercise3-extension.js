const artists = [
  {
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
  },
  {
    name: "Rauschenberg",
    portfolio: [
      {
        title: "Canyon",
        url: "https://www.rauschenbergfoundation.org/art/artwork/canyon",
      },
      {
        title: "Monogram",
        url: "https://www.rauschenbergfoundation.org/art/artwork/monogram",
      },
    ],
  },
];




function addArtist(artists) {

  // loop through each artist object in artists array
  artists.forEach((artist) => {
    // clone the outer template per artist
    const outerTemplate = document
      .getElementById("outer-template")
      .content.cloneNode(true);

    // set artist name per outer-template
    outerTemplate.querySelector(".outer-card-title").innerText = artist.name;

    // get inner-template inside the cloned outer template
    const innerTemplate = outerTemplate.querySelector(".inner-template");

    // get the card body where inner-templates are to be appended
    const outerCardBody = outerTemplate.querySelector(".outer-card-body");

    // -------------------------------------------------------------
    // loop through portfolio and create an innner-template for each
    artist.portfolio.forEach(({ title, url }) => {
      // clone inner template
      const innerClone = innerTemplate.content.cloneNode(true);

      // set inner template properties
      innerClone.querySelector(
        ".inner-card-title>span:nth-of-type(2)"
      ).innerText = title;
      innerClone.querySelector(
        ".inner-card-body>span:nth-of-type(2)"
      ).innerText = url;

      // append to outer template
      outerCardBody.appendChild(innerClone);
      // close inner forEach
    });
    // -------------------------------------------------------------

    // include the outer template into the page
    document.querySelector("#card-list").appendChild(outerTemplate);
    // close outer forEach
  });
}

addArtist(artists);

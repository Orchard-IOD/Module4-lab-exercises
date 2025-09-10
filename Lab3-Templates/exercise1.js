function addCard(title, content) {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = content;
  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}

addCard("bob", 23);
addCard("alice", 39);
addCard("Orchard", 55);

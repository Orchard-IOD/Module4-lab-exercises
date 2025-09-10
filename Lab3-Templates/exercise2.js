const data = [{name: 'bob', age: 23}, {name: 'alice', age: 39}, {name: 'orchard', age: 55}]

function addCard({title, content}) {
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


data.forEach(({ name, age }) => {
  addCard({ title: name, content: age});
});



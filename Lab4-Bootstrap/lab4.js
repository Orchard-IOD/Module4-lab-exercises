function addCard(n) {
    // get template
    const template =  document.getElementById("card-template");


  for (let i = 0; i < n; i++) {
    const clone = template.content.cloneNode(true);
    document.querySelector("#card-container").appendChild(clone);
  }
}

addCard(8);

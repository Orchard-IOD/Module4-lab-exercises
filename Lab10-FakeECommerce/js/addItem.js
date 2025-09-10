// add item to dom
// ===============

const addItem = (item) => {

  // get template and clone
  const template = document
    .getElementById("item-template")
    .content.cloneNode(true);

  // populate item template clone with data
  // set item id - not displayed
  template.querySelector(".card").setAttribute("data-id", item.id);

  // add item image and alt
  const image = template.querySelector(".card-img-top");
  image.src = item.image;
  image.alt = item.title;

  // add item body
  template.querySelector(".card-title").innerText = item.title;
  template.querySelector(".card-price").innerText = `$${item.price.toFixed(2)}`;
  template.querySelector(".card-text").innerText = item.description;

  // add category icon
  const icon = setCatIcon(item.category);
  template.querySelector(".card-cat-icon").innerHTML = icon;

  // add onclick to icon for category filter
  const catParam = item.category
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/\s+/g, "");
  template.querySelector(".card-cat-icon").addEventListener("click", () => {
    displayCategory(catParam);
  });

  // append to items container
  document.getElementById("item-container").appendChild(template);
};

// return icon type to addItem()
// =============================

const setCatIcon = (cat) => {
  if (cat == "men's clothing") {
    return mensIcon;
  } else if (cat == "women's clothing") {
    return womensIcon;
  } else if (cat == "jewelery") {
    return jewelryIcon;
  } else {
    return electronicsIcon;
  }
};

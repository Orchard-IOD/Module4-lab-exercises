// display category functionality functionality
// ============================================

// get search term
// ===============

const displayCategory = async (cat) => {
  // get main data load
  const categoryData = await fetchData();
  // console.log("Cat Data ", categoryData, cat);

  // create array and store filtered data
  let catArray;
  if (cat == "mensclothing") {
    catArray = categoryData.filter(
      (item) => item.category === "men's clothing"
    );
  } else if (cat == "womensclothing") {
    catArray = categoryData.filter(
      (item) => item.category === "women's clothing"
    );
  } else if (cat == "jewelery") {
    catArray = categoryData.filter((item) => item.category === "jewelery");
  } else if (cat == "electronics") {
    catArray = categoryData.filter((item) => item.category === "electronics");
  } else {
    catArray = categoryData;
  }

  // store filtered data objects in closure
  itemDisplayStore.update(catArray);

  // get & clear item-container
  document.getElementById("item-container").innerHTML = "";

  // display filtered items
  catArray.forEach((item) => {
    addItem(item);
  });
};

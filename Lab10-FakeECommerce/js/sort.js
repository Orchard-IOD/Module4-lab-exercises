// sort functionality
// ====================

// sort items
// ==========

const sortItems = async (sortType) => {
  // get displayed items from store in closure
  const sortStore = itemDisplayStore.get();
  // console.log("Sort Data ", sortStore, sortType);

  // create sort array based on sortStore 
  let sortArray;
  if (sortType == "pa") {
    sortArray = sortStore.slice().sort((a, b) => a.price - b.price);
  } else if (sortType == "pd") {
    sortArray = sortStore.slice().sort((a, b) => b.price - a.price);
  } else if (sortType == "ttaz") {
    sortArray = sortStore.slice().sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sortArray = sortStore.slice().sort((a, b) => b.title.localeCompare(a.title));
  }

  // get & clear item-container
  document.getElementById("item-container").innerHTML = "";

  // display filtered items
  sortArray.forEach((item) => {
    addItem(item);
  });
};

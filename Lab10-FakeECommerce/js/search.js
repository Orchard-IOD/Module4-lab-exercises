// search functionality
// ====================

// get search term
// ===============

function searchItem(event) {
  event.preventDefault();
  // assign input value to variable
  const searchTerm = event.target.search.value;
  // call searchByTerm() with input as param
  searchByTerm(searchTerm);
}


// search by term
// ==============

 const searchByTerm = async (term) => {
  // get main data load
  const searchData = await fetchData();
  
  // split term into an array
  const termArray = term.split(" ").map((k) => k.toLowerCase());
  // console.log(data, term, termArray);

  // filter data using input term
  const returnedSearchItems = searchData.filter((item) =>
    termArray.some((keyword) => item.title.toLowerCase().includes(keyword))
  );
  if (returnedSearchItems.length == 0){
    renderData();
  }
  // console.log(returnedSearchItems.length);

  // get & clear item-container
  document.getElementById("item-container").innerHTML = "";

  // store filtered data objects in closure
  itemDisplayStore.update(returnedSearchItems);

  // display filtered items
  returnedSearchItems.forEach((item) => {
    addItem(item);
  });

  document.querySelector('.search').value = '';
};


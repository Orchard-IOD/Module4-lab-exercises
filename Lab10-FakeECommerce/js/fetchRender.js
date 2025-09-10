// use axios.get to fetch data from API
// ====================================

async function fetchData() {
  try {
    await delay(1000);
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data; // assign response content to variable data
    itemDisplayStore.update(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// render fetched data
// ===================

async function renderData() {
  // get & clear item-container
  document.getElementById("item-container").innerHTML = "";
  
  // fetchData
  const renderData = await fetchData();
  // console.log("Data to render ", renderData);
  
  // add items with foreach
  renderData.forEach((item) => {
    addItem(item);
  });
}

// initial render of data
// ======================

renderData();


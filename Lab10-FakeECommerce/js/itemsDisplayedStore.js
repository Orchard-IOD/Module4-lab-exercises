// store displayed items in 
// closure return object of 
// functions update(), get(),clear()
// =================================


function createItemsDisplayedStore() {
  let results = [];

  return {
    update(newResults) {
      results = [...newResults]; // clone to protect internal state
      // console.log(results);
    },
    get() {
      console.log(results);
      return [...results]; // return a copy
    },
    clear() {
      results = [];
    },
  };
}


// set global variable to hold closure
// ===================================

const itemDisplayStore = createItemsDisplayedStore();

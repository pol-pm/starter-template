// Array of items
const items = [
  { item: "irn bru", price: 3.25, stock: 50 },
  { item: "fanta", price: 3.98, stock: 45 },
  { item: "diet coke", price: 4.4, stock: 38 },
  { item: "7up", price: 3.99, stock: 42 },
];

const mostExpensiveItem = (array) => {
  // Empty object to add the most expensive item
  let mostExpensiveItemObj = {};
  // Cost tied up on the most expensive item
  let mostExpensiveItemCost = 0;

  // For loop to loop through the array of items
  for (let i = 0; i < array.length; i++) {
    // Calculate the cost tied up on a single item
    const costTiedUpSingleItem = array[i].price * array[i].stock;

    // Check the most expensive item
    if (costTiedUpSingleItem > mostExpensiveItemCost) {
      mostExpensiveItemCost = costTiedUpSingleItem;
      mostExpensiveItemObj = array[i];
    }
  }

  return mostExpensiveItemObj;
};
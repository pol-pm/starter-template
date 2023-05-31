// In JavaScript, there a built-in method to reverse an array called reverse()
// Creating a method to reverse an array using reverse()
const reverseArray = (array) => array.reverse();

// Creating a method to reverse an array without using reverse()
const reverseArray2 = (array) => {
  // New array to put the reversed elements into
  const newArray = [];

  // For loop to add elements into the array using unshift()
  //   for (let i = 0; i < array.length; i++) {
  //     // Add to the start of the array
  //     newArray.unshift(array[i]);
  //   }

  // For loop to add elements into the array using push()
  for (let i = array.length - 1; i >= 0; i--) {
    // Add to the end of the array
    newArray.push(array[i]);
  }

  return newArray;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArray(["I", "like", "JavaScript"]));
console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArray2(["I", "like", "JavaScript"]));
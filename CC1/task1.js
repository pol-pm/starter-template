// In JavaScript, there is no built-in method to reverse a string.
// There is however, a built-in method to reverse an array.
// 1. split()
// So the first step is convert our string into an array using 
// the built-in method split().
// 2. reverse()
// Now that we have an array of letters. We can call the built-in
// method, to reverse the array order, called reverse().
// 3. join()
// Now that our array contains the reversed letters.
// Let's convert the array back into a string using the the built-in method join().
const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("John"));
console.log(reverseString("James"));
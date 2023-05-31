// Encapsulation Solution

// User class
class User {
  // Class constructor
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getters
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  // Setters
  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  // New hello() method to return 'Hello World!'
  hello() {
    return "Hello World!";
  }
}

// Create an user object
let user = new User("John", "Doe");

// Show info to the user
// Call hello() method
console.log(user.hello());
// Show firstName and lastName (using the get methods)
console.log(`My name is ${user.firstName} ${user.lastName}`);

// Set a new first and last name (using the set methods)
user.firstName = "Jane";
user.lastName = "Doe";

// Show info to the user
// Call hello() method
console.log(user.hello());
// Show firstName and lastName (using the get methods)
console.log(`My name is ${user.firstName} ${user.lastName}`);
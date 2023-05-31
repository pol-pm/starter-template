// Classes and Objects Solution

// User class
class User {
  // Class constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // hello() method
  hello() {
    console.log(`hello, ${this.firstName} ${this.lastName}`);
  }
}

// Create an user1 object
const user1 = new User("John", "Doe");

// Get user1 first and last name and say hello
user1.hello();

// Create user2 object
const user2 = new User("Jane", "Doe");

// Get user2 first and last name and say hello
user2.hello();
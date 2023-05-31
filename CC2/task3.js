// Inheritance (Subclass and Superclass) Solution

// User class
class User {
  // Class constructor
  constructor() {
    // Initialising the userName variable
    this._userName = "";
  }

  // Set method
  set userName(userName) {
    this._userName = userName;
  }
}

// Admin class that inherits from the User class
class Admin extends User {
  // expressYourRole() method
  expressYourRole() {
    return "Admin";
  }

  // sayHello() method
  sayHello() {
    return `Hello admin, ${this._userName}`;
  }
}

// Create an admin object
let admin = new Admin();

// Set the user name to "Balthazar"
admin.userName = "Balthazar";

// Show info to the user
console.log(admin.sayHello());
// Abstraction Solution

// Abstract class
class User {
  // Class constructor
  constructor(username) {
    this._username = username;
    // Prevent to create objects from this class
    if (this.constructor === User) {
      throw new TypeError("Cannot construct Abstract instances directly.");
    }
  }

  // Abstract method
  stateYourRole() {
    // Prevent to be called directly
    throw new Error("You have to implement the method stateYourRole!");
  }

  // Set method
  set username(username) {
    this._username = username;
  }

  // Get method
  get username() {
    return this._username;
  }
}

// Admin class (sub-class)
class Admin extends User {
  // Class constructor
  constructor(username) {
    // Call the super-class constructor
    // and pass on the username
    super(username);
  }
  // Override method
  stateYourRole() {
    return "admin";
  }

  // Just for testing
  foo() {
    // Calls Abstract.stateYourRole();
    super.stateYourRole();
  }
}

// Viewer class (sub-class)
class Viewer extends User {
  // Class constructor
  constructor(username) {
    // Call the super-class constructor
    // and pass on the username
    super(username);
  }
  // Override method
  stateYourRole() {
    return "viewer";
  }
}

// Create an user object
//let user = new User("Balthazar"); // User is Abstract, so it throws an error

// Create an admin object
let admin = new Admin("Balthazar");
//admin.foo(); // Calls User.foo() and throws an error
console.log(admin.username); // Balthazar
console.log(admin.stateYourRole()); // admin

// Create a viewer object
let viewer = new Viewer("Melchior");
console.log(viewer.username); // Melchior
console.log(viewer.stateYourRole()); // viewer
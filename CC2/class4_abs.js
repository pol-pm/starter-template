/*
Abstraction is a concept in which we hide the implementation
detail of a method and only expose the important things
or attributes to the user, like in the code below
*/

class Person {
  constructor() {
    if (this.constructor === Person) {
      throw new TypeError("Cannot construct Abstract instances directly.");
    }
  }
  // An abstract method
  foo() {
    // Error Type. The child has implemented this method but also called `super.foo()`.
    throw new TypeError("Do not call abstract method foo from child.");
  }
}

class User extends Person {
  constructor() {
    super();
  }
  foo() {
    // Calls Abstract.foo();
    super.foo();
  }
}

// const a = new Person(); // Person is Abstract, so it throws an error
const b = new User(); // User is a sub-class, so no error
// b.foo(); // Calls Abstract.foo();
// A good example:
// https://gist.github.com/alex-shamshurin/38610574bd9d8491d955401b032954b4
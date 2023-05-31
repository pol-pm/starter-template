/*
Encapsulation is a concept that the variables or data in classes cannot be
accessed directly from an object and should be private, there should be
getter and setter methods to do this like below:
*/
class User {
  constructor(name, email, age) {
    this._name = name;
    this._email = email;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  getAge() {
    return `User age is ${this._age}`;
  }
  
}

const user = new User('John', 'john@mail.com', 34);

console.log(user.name); // John

user.name = 'James';

console.log(user.name); // James
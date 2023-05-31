class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getAge() {
    return `User age is ${this.age}`;
  }
}

const user1 = new User('John', 'john@mail.com', 34);
const user2 = new User('James', 'james@mail.com', 32);

console.log(user1.getAge()); // User age is 34
console.log(user2.getAge()); // User age is 32
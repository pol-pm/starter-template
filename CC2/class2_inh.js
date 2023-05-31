/*
Inheritance is a concept in which we can extend our parent class to child class for example,
if there is a class named Animal and second class  Duck so the class Duck can be inherited
from  Animal class, like below we have Developer class which is inherited from the  User class,
and now the Developer class can use its parent class  User it's variable and methods.
*/

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

class Developer extends User {
  constructor(name, email, age, skills) {
    super(name, email, age);
    this.skills = skills;
  }
}

const developer = new Developer('James', 'james@mail.com', 32, [
  'html',
  'css',
  'js',
]);

console.log(developer.getAge()); // User age is 32
console.log(developer.skills); // ['html','css','js']
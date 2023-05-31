/*
Polymorphism is also known as Method Overriding in some languages,
this means that if the class is inherited from its parent class
and both have the same methods, so the child class methods can be overridden
or rewritten according to its functionality, like below we have same methods
makeSound in different but inherited classes but their implementation detail
is different according to their functionality they should perform.
*/

class Animal {
  makesSound() {
    console.log('Animal makes sound');
  }
}

class Duck extends Animal {
  makesSound() {
    console.log('Quack Quack');
  }
}

class Cat extends Animal {
  makesSound() {
    console.log('Meow Meow');
  }
}

const cat = new Cat();
cat.makesSound() // Meow Meow

const duck = new Duck();
duck.makesSound() // Quack Quack
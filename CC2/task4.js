// Polymorphism Solution

// User class
class User {
  // Class constructor
  constructor() {
    // Initialising the numberOfArticles variable
    this._numberOfArticles = 0;
  }

  // Set method
  set numberOfArticles(numberOfArticles) {
    this._numberOfArticles = numberOfArticles;
  }

  // Get method
  get numberOfArticles() {
    return this._numberOfArticles;
  }

  // Method to calculate the scores
  calcScores() {
    // To be changed in the sub-classes
  }
}

// Author class (sub-class)
class Author extends User {
  // Override method
  calcScores() {
    return this.numberOfArticles * 10 + 20;
  }
}

// Editor class (sub-class)
class Editor extends User {
  // Override method 
  calcScores() {
    return this.numberOfArticles * 6 + 15;
  }
}

// Create an author object
let author = new Author();
// Set the number of articles
author.numberOfArticles = 8;
// Print the author's scores to the user
console.log("Author's scores: " + author.calcScores()); // 100

// Create an editor object
let editor = new Editor();
// Set the number of articles
editor.numberOfArticles = 15;
// Print the editor's scores
console.log("Editor's scores: " + editor.calcScores()); // 105
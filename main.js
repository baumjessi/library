const myLibrary = [
];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.UUID = crypto.randomUUID();
  myLibrary.push(this);
  console.log(this.title);
  console.log(this.author);
  console.log(this.pages);
  console.log(this.hasRead);
  console.log(this.UUID);
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    console.log(newBook);
}

addBookToLibrary("Great Value", "Jessi B.", 170, true);
addBookToLibrary("Shrike House", "Jessi B.", 200, false);
addBookToLibrary("Dune", "Frank Herbert", 700, false);

console.table(myLibrary);

let cardBody = document.getElementById("card-body");

function displayBook() {
  myLibrary.forEach(Book => {
    let newCard = document.createElement('div');
    newCard.textContent = `${Book.title} by ${Book.author} is ${Book.pages} long.`;
    newCard.className = "card";
    cardBody.appendChild(newCard);
  }
)};

displayBook(myLibrary);
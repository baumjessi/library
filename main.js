const myLibrary = [
];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  console.log(this.title);
  console.log(this.author);
  console.log(this.pages);
  console.log(this.hasRead);
}

const book1 = Book("Dune", "Frank Herbert", "200", "true");
const book2 = Book("Cruddy", "Lynda Barry", "200", "false");

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);
}


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
    newCard.className = "card";
    cardBody.appendChild(newCard);
    let title = document.createElement('h1');
    title.textContent = `${Book.title}`;
    newCard.appendChild(title);
    let author = document.createElement('p');
    author.textContent = `Author: ${Book.author}`;
    newCard.appendChild(author);
    let pages = document.createElement('p');
    pages.textContent = `Pages: ${Book.pages}`;
    newCard.appendChild(pages);
    let hasRead = document.createElement('p');
    newCard.appendChild(hasRead);
    if (hasRead = true) {
      hasRead.textContent = "Read! :)";
    }
    else if (hasRead = false) {
      hasRead.textContent = "Not read yet. :(";
    }
    }
)};

displayBook(myLibrary);

const addBtn = document.getElementById("add-btn");
const newBookDialog = document.getElementById("new-book-dialog");
newBookDialog.returnValue = "new Book";

addBtn.addEventListener("click", (e)=> {
  newBookDialog.showModal();
});

const dialogCloseBtn = document.getElementById("dialog-close");

dialogCloseBtn.addEventListener("click", e => {
  newBookDialog.close();
});

newBookDialog.addEventListener("click", e => {
  const dialogDimensions = newBookDialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
   newBookDialog.close()
  }
})
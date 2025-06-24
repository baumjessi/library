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

function displayAllBooks() {
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

displayAllBooks(myLibrary);

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

let newBookForm = document.getElementById("new-book-form");
let submitBookBtn = document.getElementById("dialog-submit");
  submitBookBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let hasRead = true;
    let newBook = {
      title: title.value,
      author: author.value,
      pages: pages.value,
      hasRead: hasRead,
      UUID: crypto.randomUUID(),
    }
    myLibrary.push(newBook);

    let newCard = document.createElement('div');
    newCard.className = "card";
    cardBody.appendChild(newCard);
    let newTitle = document.createElement('h1');
    newTitle.textContent = `${title.value}`;
    newCard.appendChild(newTitle);
    let newAuthor = document.createElement('p');
    newAuthor.textContent = `Author: ${author.value}`;
    newCard.appendChild(newAuthor);
    let newPages = document.createElement('p');
    newPages.textContent = `Pages: ${pages.value}`;
    newCard.appendChild(newPages);
    let newHasRead = document.createElement('p');
    newCard.appendChild(newHasRead);
    if (newHasRead = true) {
      newHasRead.textContent = "Read! :)";
    }
    else if (newHasRead = false) {
      newHasRead.textContent = "Not read yet. :(";
    }
    console.table(myLibrary);
    newBookDialog.close();
});

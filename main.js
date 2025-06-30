let myLibrary = [
];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.UUID = crypto.randomUUID();
  myLibrary.push(this);
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
}

addBookToLibrary("Great Value", "Jessi B.", 170, true);
addBookToLibrary("Shrike House", "Jessi B.", 200, false);
addBookToLibrary("Dune", "Frank Herbert", 700, false);


let cardBody = document.getElementById("card-body");

function displayAllBooks() {
  myLibrary.forEach(Book => {
    let newCard = document.createElement('div');
    newCard.className = "card";
    newCard.setAttribute("data-UUID", Book.UUID);
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
    let hasRead = document.createElement('button');
    newCard.appendChild(hasRead);
    if (hasRead = true) {
      hasRead.textContent = "Read! :)";
    }
    else if (hasRead = false) {
      hasRead.textContent = "Not read yet. :(";
    }
    let removeBtn = document.createElement('button');
    removeBtn.setAttribute("data-UUID", Book.UUID);
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    newCard.appendChild(removeBtn);
    }
)};

displayAllBooks(myLibrary);

let newBookForm = document.getElementById("new-book-form");
  newBookForm.addEventListener("submit", e => {
    e.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let hasRead = document.getElementById('has-read');
    if (hasRead.checked === true) {
      hasRead.value = true;
    }
    else if (hasRead.checked === false) {
      hasRead.value = false;
    }
    let newBook = {
      title: title.value,
      author: author.value,
      pages: pages.value,
      hasRead: hasRead.value,
      UUID: crypto.randomUUID(),
    }
    myLibrary.push(newBook);
  
    let newCard = document.createElement('div');
    newCard.className = "card";
    newCard.setAttribute("data-UUID", newBook.UUID);
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
    newHasRead.className = "hasReadToggle";
    if (hasRead.checked === true) {
      newHasRead.innerHTML = "Read! :)";
    }
    else if (hasRead.checked === false) {
      newHasRead.innerHTML = "Not read yet. :(";
    }
    let removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.setAttribute("data-UUID", newBook.UUID);
    newCard.appendChild(removeBtn);
    removeBtn.addEventListener("click", e => {
      if (removeBtn.getAttribute("data-UUID") === newCard.getAttribute("data-UUID")) {
      newCard.remove();
      const newLibrary = myLibrary.filter(book => book.UUID !== removeBtn.getAttribute("data-UUID"));
      myLibrary = newLibrary;
      }
    });
    newBookDialog.close();
    newBookForm.reset();
});

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

let removeBtn = document.querySelectorAll("button.remove-btn");
let removeBtnArray = Array.from(removeBtn);
let card = document.querySelectorAll(".card");
let cardArray = Array.from(card);

removeBtnArray.forEach(button => {
  button.addEventListener("click", e => {
    let buttonUUID = button.getAttribute("data-UUID");
    card.forEach(card => {
    if (card.getAttribute("data-UUID") === buttonUUID) {
      card.remove();
      const newLibrary = myLibrary.filter(book => book.UUID !== button.getAttribute("data-UUID"));
      myLibrary = newLibrary;
    }})
    })});

let hasReadToggle = document.querySelectorAll('.has-read');
let hasReadArray = Array.from(hasReadToggle);

hasReadArray.forEach(toggle => {
        toggle.addEventListener("click", e => {
          window.alert("Poopy Peepy");
      })
      });

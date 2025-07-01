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

addBookToLibrary("Helter Skelter", "Vincent Bugliosi", 689, true);
addBookToLibrary("Cruddy", "Lynda Barry", 320, true);
addBookToLibrary("Dune", "Frank Herbert", 700, true);
addBookToLibrary("1Q84", "Haruki Murikami", 272, false);
addBookToLibrary("Atomic Habits", "James Clear", 320, false);


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
    let checkboxDiv = document.createElement('div');
    let readAndRemove = document.createElement('div');
    readAndRemove.className = 'read-and-remove';
    newCard.appendChild(readAndRemove);
    readAndRemove.appendChild(checkboxDiv);
    checkboxDiv.className = "checkbox-div";
    let newHasRead = document.createElement('input');
    newHasRead.type = 'checkbox';
    newHasRead.name = 'card-has-read';
    newHasRead.className = 'card-has-read';
    let newCheckboxId = 'card-has-read-' + Book.UUID;
    newHasRead.id = newCheckboxId;
    let hasReadLabel = document.createElement('label');
    hasReadLabel.className = 'has-read-label';
    hasReadLabel.htmlFor = newCheckboxId;
    checkboxDiv.appendChild(newHasRead);
    checkboxDiv.appendChild(hasReadLabel);
    hasReadLabel.textContent = 'Read! :)'
    if (Book.hasRead === true) {
      newHasRead.value = true;
      newHasRead.checked = true
    }
    else if (Book.hasRead === false) {
      newHasRead.value = false;
    }
    let removeBtn = document.createElement('button');
    removeBtn.setAttribute("data-UUID", Book.UUID);
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    readAndRemove.appendChild(removeBtn);
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
    let readAndRemove = document.createElement('div');
    readAndRemove.className = 'read-and-remove';
    newCard.appendChild(readAndRemove);
    let checkboxDiv = document.createElement('div');
    checkboxDiv.className = "checkbox-div";
    readAndRemove.appendChild(checkboxDiv);
    let newHasRead = document.createElement('input');
    newHasRead.type = 'checkbox';
    newHasRead.name = 'card-has-read';
    newHasRead.className = 'card-has-read';
    let newCheckboxId = 'card-has-read-' + Book.UUID;
    newHasRead.id = newCheckboxId;
    let hasReadLabel = document.createElement('label');
    hasReadLabel.htmlFor = 'card-has-read';
    hasReadLabel.className = 'has-read-label';
    hasReadLabel.htmlFor = newCheckboxId;
    checkboxDiv.appendChild(newHasRead);
    checkboxDiv.appendChild(hasReadLabel);
    hasReadLabel.textContent = 'Read! :)'
    if (hasRead.checked === true) {
      newHasRead.value = true;
      newHasRead.checked = true
    }
    else if (hasRead.checked === false) {
      newHasRead.value = false;
    }
    let removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.setAttribute("data-UUID", newBook.UUID);
    readAndRemove.appendChild(removeBtn);
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
  e.preventDefault();
  newBookDialog.close();
  newBookForm.reset();
});

newBookDialog.addEventListener("click", e => {
  const dialogDimensions = newBookDialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
   newBookDialog.close();
  newBookForm.reset();
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
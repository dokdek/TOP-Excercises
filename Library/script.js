const table = document.getElementById("table");
const addEntryBtn = document.getElementById("add-btn");
const addForm = document.getElementById("add-form");
const submitBtn = document.getElementById("submit-btn");

let library = [
  new Book("memerman", "hitler", "647", false),
  new Book("hello", "test", "198", true),
];

addEntryBtn.addEventListener("click", (e) => {
  addForm.hidden = false;
  addEntryBtn.hidden = true;
});

submitBtn.addEventListener("click", (e) => {
  libraryAdd();
});

function libraryAdd() {
  let newEntry = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("isRead").value,
    library.length
  );
  library.push(newEntry);
  let newTableEntry = document.createElement("tr");
  let newTitle = document.createElement("th");
  newTitle.innerHTML = library[library.length - 1].title;
  let newAuthor = document.createElement("th");
  newAuthor.innerHTML = library[library.length - 1].author;
  let newPage = document.createElement("th");
  newPage.innerHTML = library[library.length - 1].pages;
  let newRead = document.createElement("th");
  newRead.innerHTML = library[library.length - 1].read;
  newTableEntry.append(newTitle, newAuthor, newPage, newRead);
  table.appendChild(newTableEntry);
  addForm.hidden = true;
  addEntryBtn.hidden = false;
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  document.getElementById("pages").value = '';
}

function render() {
  let librarySize = library.length;
  for (i = 0; i < librarySize; i++) {
    let newEntry = document.createElement("tr");
    let newTitle = document.createElement("th");
    newTitle.innerHTML = library[i].title;
    let newAuthor = document.createElement("th");
    newAuthor.innerHTML = library[i].author;
    let newPage = document.createElement("th");
    newPage.innerHTML = library[i].pages;
    let newRead = document.createElement("th");
    newRead.innerHTML = library[i].read;
    newEntry.append(newTitle, newAuthor, newPage, newRead);
    table.appendChild(newEntry);
  }
  table.hidden = false;
}

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

Book.prototype.info = function () {
  let info =
    this.title +
    " by" +
    this.author +
    ", " +
    this.pages +
    " pages, " +
    "read: " +
    this.read;
};

render();

const table = document.getElementById("table");
const addEntryBtn = document.getElementById("add-btn");
const addForm = document.getElementById("add-form");
const submitBtn = document.getElementById("submit-btn");
let library = [];

//Event Listeners start
addEntryBtn.addEventListener("click", (e) => {
  addForm.hidden = false;
  addEntryBtn.hidden = true;
});

submitBtn.addEventListener("click", (e) => {
  libraryAdd();
});

//Adds event listeners to toggle read/unread, modifies the library as well.
function addReadEvent(btn){
        btn.addEventListener('click', (e) => {
          let index = btn.parentNode.parentNode.getAttribute('id');
          library[index].read = (library[index].read == 'true') ? 'false' : 'true';
          let btnCopy = btn;
          let parentCopy = btn.parentNode;
          btn.parentNode.innerHTML = (library[index].read == 'true') ? 'Read <br>' : 'Not Read <br>';
          parentCopy.appendChild(btnCopy);
        });
}

function addRemoveEvent(btn){
        btn.addEventListener('click', (e) => {
            let index = btn.parentNode.parentNode.getAttribute('id');
            library.splice(index, 1);
            btn.parentNode.parentNode.remove();
            let tableRow = document.querySelectorAll('.data-row');
            tableRow.forEach(row => {
                row.remove();
            });
            render();
        });
}
//Event Listeners end


//Adds entries to library and refreshes the view on the table
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
  newTableEntry.setAttribute('class', 'data-row');
  newTableEntry.setAttribute('id', library.length - 1);
  let newTitle = document.createElement("th");
  newTitle.innerHTML = library[library.length - 1].title;
  let newAuthor = document.createElement("th");
  newAuthor.innerHTML = library[library.length - 1].author;
  let newPage = document.createElement("th");
  newPage.innerHTML = library[library.length - 1].pages;
  let newRead = document.createElement("th");
  newRead.innerHTML = (library[library.length - 1].read == 'true') ? 'Read <br>' : 'Not Read <br>';
  let readBtn = document.createElement('button');
  readBtn.setAttribute('class', 'read-btn')
  readBtn.innerHTML = 'Read/Not Read';
  newRead.appendChild(readBtn);
  let newRemove = document.createElement('th');
  let removeBtn = document.createElement('button');
  removeBtn.setAttribute('class', 'remove-btn');
  removeBtn.innerHTML = 'Remove';
  newRemove.appendChild(removeBtn);
  newTableEntry.append(newTitle, newAuthor, newPage, newRead, newRemove);
  table.appendChild(newTableEntry);
  addForm.hidden = true;
  addEntryBtn.hidden = false;
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  document.getElementById("pages").value = '';

  addReadEvent(readBtn);
  addRemoveEvent(removeBtn);
}


//Initializes the table based on what is already in the library.
function render() {
  let librarySize = library.length;
  for (i = 0; i < librarySize; i++) {
    let newEntry = document.createElement("tr");
    newEntry.setAttribute('class', 'data-row');
    newEntry.setAttribute('id', i)
    let newTitle = document.createElement("th");
    newTitle.innerHTML = library[i].title;
    let newAuthor = document.createElement("th");
    newAuthor.innerHTML = library[i].author;
    let newPage = document.createElement("th");
    newPage.innerHTML = library[i].pages;
    let newRead = document.createElement("th");
    newRead.innerHTML = (library[i].read == 'true') ? 'Read <br>' : 'Not Read <br>';
    let readBtn = document.createElement('button');
    readBtn.setAttribute('class', 'read-btn')
    readBtn.innerHTML = 'Read/Not Read';
    newRead.appendChild(readBtn);
    let newRemove = document.createElement('th');
    let removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove-btn');
    removeBtn.innerHTML = 'Remove';
    newRemove.appendChild(removeBtn);
    newEntry.append(newTitle, newAuthor, newPage, newRead, newRemove);
    table.appendChild(newEntry);
    addReadEvent(readBtn);
    addRemoveEvent(removeBtn);
  }

  table.hidden = false;
}


//Book class
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

render();

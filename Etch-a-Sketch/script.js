const container = document.querySelector("#container");

const button = document.querySelector('#btn')

button.addEventListener('click', (e) => {
    document.getElementById('container').innerHTML = '';
    let num = Number(prompt('Size of grid: '));
    createGrid(num);
});

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }

function createGrid(num) {
  const rowElement = document.createElement("div");
  rowElement.classList.add("row");
  const gridElement = document.createElement("div");
  gridElement.classList.add("grid-element");
  for (i = 0; i < num; i++) {
    container.appendChild(rowElement.cloneNode(true));
  }
  document.querySelectorAll(".row").forEach((row) => {
    for (i = 0; i < num; i++) {
      row.appendChild(gridElement.cloneNode(true));
    }
  });
  document.querySelectorAll('.grid-element').forEach((element) => {
      element.style.padding = `${(100/num)/2}%`;
      element.addEventListener('mouseover', (e) => {
          element.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      })
  });

}

createGrid(16);

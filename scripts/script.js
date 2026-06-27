const gridContainer = document.querySelector(".grid");
const order = document.querySelector("#order");

function createGrid(order) {
  for (let i = 0; i < order * order; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
}

createGrid(16);

gridContainer.addEventListener("mouseover", e => {
  if (e.target.classList.contains("cell"))
    e.target.classList.add("add-color");
})


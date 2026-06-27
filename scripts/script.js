const gridContainer = document.querySelector(".grid");
const form = document.querySelector("form");

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const orderObj = e.target.elements.order.value;
  order = Number(orderObj);
  
  gridContainer.innerHTML = "";

  createGrid(order);

  gridContainer.style.setProperty("--order", order);

  gridContainer.addEventListener("mouseover", e => {
  if (e.target.classList.contains("cell"))
    e.target.classList.add("add-color");
});

});


const gridContainer = document.querySelector(".grid");
const form = document.querySelector("form");

const clrBtn = document.querySelector("#clear-btn");
const rnbBtn = document.querySelector("#rainbow-btn");

let mode = "normal";
let currentOrder = 16;

function createGrid(order) {
  gridContainer.innerHTML = "";
  gridContainer.style.setProperty("--order", order);

  for (let i = 0; i < order * order; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
}


gridContainer.addEventListener("mouseover", e => {
  if(!e.target.classList.contains("cell")) return;

  if (mode === "rainbow") {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    e.target.classList.remove("add-color");
  } else {
    e.target.style.backgroundColor = "";
    e.target.classList.add("add-color");
  }
});

rnbBtn.addEventListener("click", () => {
  mode = "rainbow";
});

clrBtn.addEventListener("click", () => {
  mode = "normal";
  createGrid(currentOrder);
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const orderInput = e.target.elements.order.value;
  currentOrder = Number(orderInput);

  gridContainer.innerHTML = "";
  mode = "normal";
  createGrid(currentOrder);
});

createGrid(currentOrder);

"use strict";

const Grid = document.querySelector(".grid");
const newGrid = document.querySelector(".new");
const Reset = document.querySelector(".reset");
let isDrawing = false;

for (let i = 1; i <= 1024; i++) {
  const Square = document.createElement("div");
  Square.classList.add("squares");
  Grid.appendChild(Square);

  Square.addEventListener("mouseover", function () {
    if (isDrawing) {
      Square.style.backgroundColor = "black";
    }
  });
}

Grid.addEventListener("mousedown", function () {
  isDrawing = true;
});

Grid.addEventListener("mouseup", function () {
  isDrawing = false;
});

newGrid.addEventListener("click", function () {
  const userInput = prompt("Create a new grid (max:100 squares):");
  if (userInput > 100) {
    alert("Limit exceeded");
  }
});

Reset.addEventListener("click", function () {
  isDrawing = false;
  const allSquares = document.querySelectorAll(".squares");
  allSquares.forEach((square) => {
    square.style.backgroundColor = "";
  });
});

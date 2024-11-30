"use strict";

const Grid = document.querySelector(".grid");
const newGrid = document.querySelector(".new");
const Reset = document.querySelector(".reset");
const Black = document.querySelector(".black");
const Rainbow = document.querySelector(".rainbow");

let isDrawing = false;

// Function to initialize event listeners for drawing
function addDrawingListeners(square, colorCallback) {
  square.addEventListener("mouseover", function () {
    if (isDrawing) {
      square.style.backgroundColor = colorCallback();
    }
  });

  // Prevent drag behavior when clicking and dragging
  square.addEventListener("mousedown", (e) => e.preventDefault());
}

// Function to create the default grid
function createGrid(size = 16) {
  Grid.innerHTML = ""; // Clear existing grid
  const squareSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    square.style.flex = `0 0 ${squareSize}%`;
    square.style.aspectRatio = "1 / 1";

    addDrawingListeners(square, () => "black");

    Grid.appendChild(square);
  }
}

// calling the default grid
createGrid();

// Update drawing states on mouse events
Grid.addEventListener("mousedown", () => (isDrawing = true));
Grid.addEventListener("mouseup", () => (isDrawing = false));

//Creating a new grid (remember to convert strings into numbers)
newGrid.addEventListener("click", function () {
  const userInput = prompt("Enter a new grid size (max 100):");
  const size = parseInt(userInput);

  if (isNaN(size) || size <= 0 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  createGrid(size);
});

Rainbow.addEventListener("click", function () {
  const allSquares = document.querySelectorAll(".squares");
  allSquares.forEach((square) => {
    addDrawingListeners(square, () => `hsl(${Math.random() * 360}, 100%, 50%)`);
  });
});

Black.addEventListener("click", function () {
  const allSquares = document.querySelectorAll(".squares");
  allSquares.forEach((square) => {
    addDrawingListeners(square, () => "black");
  });
});

Reset.addEventListener("click", function () {
  isDrawing = false;
  const allSquares = document.querySelectorAll(".squares");
  allSquares.forEach((square) => {
    square.style.backgroundColor = "";
    addDrawingListeners(square, () => "black");
  });
});

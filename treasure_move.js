// ЧАСТИНА 1

const game = {
  size: 4,
  attempts: 0,
};

game.attempts = game.size * 2;
game.matrix = [];

console.log(game.size);
console.log(game.attempts);

// ЧАСТИНА 2

const elements = {
  message: document.getElementById("message"),
  map: document.getElementById("map"),
  attempts: document.getElementById("attempts"),
  move: document.getElementById("move"),

  updateAttempts: function () {
    this.attempts.innerText = game.attempts;
  },
  showWin() {
    this.message.innerText = "Вітаю! Ви знайшли скарб! 🎉";
    this.message.style.color = "yellowgreen";
  },
  showLose() {
    this.message.innerText = "У вас закінчилися спроби 😢";
    this.message.style.color = "crimson";
  },
};

elements.updateAttempts();
console.log(elements.message);
console.log(elements.attempts);

// ЧАСТИНА 3

const treasure = {
  row: Math.floor(Math.random() * game.size),
  col: Math.floor(Math.random() * game.size),
  emoji: "👑",

  place() {
    for (let r = 0; r < game.size; r++) {
      for (let c = 0; c < game.size; c++) {
        game.matrix[r][c].innerText = "";
      }
    }
    game.matrix[this.row][this.col].innerText = this.emoji;
  },
  move() {
    this.row = Math.floor(Math.random() * game.size);
    this.col = Math.floor(Math.random() * game.size);
    this.place();
  },
};

console.log(treasure.row);
console.log(treasure.col);

for (let i = 0; i < game.size; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  const matrixRow = [];

  for (let j = 0; j < game.size; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
    matrixRow.push(cell);
  }

  elements.map.appendChild(row);
  game.matrix.push(matrixRow);
}

game.matrix[1][1].style.backgroundColor = "lightyellow";
// game.matrix[treasure.row][treasure["col"]].innerText = treasure.emoji;
treasure.place();

elements.move.onclick = () => treasure.move();

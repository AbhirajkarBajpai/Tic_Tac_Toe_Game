document.getElementById("startGameBtn").addEventListener("click", startGame);

function startGame() {
  const gridSize = parseInt(document.getElementById("gridSize").value);
  const winStreak = parseInt(document.getElementById("winStreak").value);
  if(gridSize>10||gridSize<3){
    alert("Gridsize Should be between 3 and 10!!!");
    return;
  }
  if(winStreak<3){
    alert("Win Streak Should be between 3 and Gridsize");
    return;
  }
  if (winStreak > gridSize) {
    alert("Win streak cannot be greater than grid size.");
    return;
  }
  initializeGame(gridSize, winStreak);
}

function initializeGame(gridSize, winStreak) {
  const Board = document.getElementById("Board");
  Board.innerHTML = "";
  Board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  const gameState = Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(null));
  let currentPlayer = "X";
  let isGameActive = true;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => handleMove(row, col, button));
      Board.appendChild(button);
    }
  }

  function handleMove(row, col, button) {
    if (!isGameActive || gameState[row][col]) return;
    gameState[row][col] = currentPlayer;
    button.innerText = currentPlayer;
    button.classList.add(currentPlayer === "X" ? "x-move" : "o-move");

    if (checkWin(row, col)) {
      isGameActive = false;
      document.getElementById("status").innerText = `${currentPlayer} wins!`;
      return;
    }
    if (gameState.flat().every((cell) => cell)) {
      isGameActive = false;
      document.getElementById("status").innerText = "Draw!";
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  function checkWin(row, col) {
    function checkDirection(deltaRow, deltaCol) {
      let count = 0;
      for (let step = -winStreak + 1; step < winStreak; step++) {
        const r = row + step * deltaRow;
        const c = col + step * deltaCol;
        if (
          r >= 0 &&
          r < gridSize &&
          c >= 0 &&
          c < gridSize &&
          gameState[r][c] === currentPlayer
        ) {
          count++;
          if (count >= winStreak) return true;
        } else {
          count = 0;
        }
      }
      return false;
    }

    return (
      checkDirection(0, 1) || 
      checkDirection(1, 0) || 
      checkDirection(1, 1) || 
      checkDirection(1, -1) 
    );
  }
}

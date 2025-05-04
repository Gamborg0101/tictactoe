const game = () => {
  let gameover = false;
  const factoryPlayer = (name, symbol, userturn) => {
    return { name, symbol, userturn };
  };

  function randomizeStartPlayer() {
    let randomizeStartPlayer = Math.floor(Math.random() * 2);
    if (randomizeStartPlayer === 1) {
      user1.userturn = true;
    } else if (randomizeStartPlayer === 0) user2.userturn = true;
  }

  const user1 = factoryPlayer("Player 1", "x", false);
  const user2 = factoryPlayer("Player 2", "o", false);

  randomizeStartPlayer();

  const gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const checkWinner = (userSymbol) => {
    function checkColumn() {
      for (let n = 0; n < 3; n++) {
        checkSingleColumn(n);
      }
    }
    function checkSingleColumn(n) {
      if (
        gameboard.map((cell) => cell[n]).every((index) => index == userSymbol)
      ) {
        console.log("Winner with columns", n);
        gameover = true;
        winnerDeclaration(user1, user2);
        return true;
      }
      return false;
    }

    function checkRow() {
      for (let n = 0; n < 3; n++) {
        checkSingleRow(n);
      }
      return false;
    }
    function checkSingleRow(n) {
      if (
        gameboard[n].map((cell) => cell).every((index) => index == userSymbol)
      ) {
        console.log("Winner with rows", n);
        winnerDeclaration(user1, user2);
        gameover = true;
        return true;
      }
      return false;
    }

    function checkDiagonalLeftRight() {
      const diagonalCoordinatesLeft = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatesLeft.push(gameboard[n][n]);
      }
      if (diagonalCoordinatesLeft.every((index) => index == userSymbol)) {
        console.log("Winner with diagonalCoordinatesLeft");
        gameover = true;
        winnerDeclaration(user1, user2);
        return true;
      }
      return false;
    }

    function checkDiagonalRightLeft() {
      const diagonalCoordinatsRight = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatsRight.push(gameboard[n][2 - n]);
      }
      if (diagonalCoordinatsRight.every((index) => index == userSymbol)) {
        console.log("Winner with checkDiagonalRightLeft");
        gameover = true;
        winnerDeclaration(user1, user2);
        return true;
      }
      return false;
    }
    return (
      checkColumn() ||
      checkRow() ||
      checkDiagonalLeftRight() ||
      checkDiagonalRightLeft()
    );
  };

  function winnerDeclaration(user1, user2) {
    const winnerPlacement = document.getElementById("winnerName");
    user1.userturn
      ? (winnerPlacement.innerText = user1.name)
      : (winnerPlacement.innerText = user2.name);
  }

  const switchTurns = () => {
    user1.userturn = !user1.userturn;
    user2.userturn = !user2.userturn;
  };

  function getCoordinates() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", (e) => {
        let coordinateX = e.target.dataset.x;
        let coordinateY = e.target.dataset.y;
        placeSymbol(coordinateX, coordinateY, e);
      });
    });
  }
  getCoordinates();

  function placeSymbol(x, y, e) {
    if (gameover) return;
    if (e.target.innerText !== "") return;

    const userSymbol = getCurrentUserSymbol();
    updateBoard(x, y, userSymbol);
    renderSymbol(e.target, userSymbol);

    checkWinner(userSymbol);
    switchTurns();
  }

  function renderSymbol(square, symbol) {
    square.innerText = symbol;
  }

  function updateBoard(x, y, symbol) {
    gameboard[x][y] = symbol;
  }

  function getCurrentUserSymbol() {
    return user1.userturn ? user1.symbol : user2.symbol;
  }
};

function resetGame() {
  const resetButton = document.getElementById("reset");
  const squares = document.querySelectorAll(".square");
  const winnerPlacement = document.getElementById("winnerName");
  resetButton.addEventListener("click", () => {
    winnerPlacement.innerText = "";
    squares.forEach((cell) => {
      cell.innerText = "";
    });
    game();
  });
}

game();

resetGame();

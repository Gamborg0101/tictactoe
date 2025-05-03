const game = () => {
  const factoryPlayer = (name, symbol, userturn) => {
    return { name, symbol, userturn };
  };

  function randomizeStartPlayer() {
    let randomizeStartPlayer = Math.floor(Math.random() * 2);
    if (randomizeStartPlayer === 1) {
      user1.userturn = true;
    } else if (randomizeStartPlayer === 0) user2.userturn = true;
  }

  const user1 = factoryPlayer("Casper", "x", false);
  const user2 = factoryPlayer("Jens", "o", false);

  randomizeStartPlayer();

  // console.log(user1);
  // console.log(user2);

  const gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const checkWinner = (userSymbol) => {
    // console.log(gameboard);
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
        return true;
      }
    }

    function checkRow() {
      for (let n = 0; n < 3; n++) {
        checkSingleRow(n);
      }
    }
    function checkSingleRow(n) {
      if (
        gameboard[n].map((cell) => cell).every((index) => index == userSymbol)
      ) {
        console.log("Winner with rows", n);
        return true;
      }
    }

    function checkDiagonalLeftRight() {
      const diagonalCoordinatesLeft = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatesLeft.push(gameboard[n][n]);
      }
      if (diagonalCoordinatesLeft.every((index) => index == userSymbol)) {
        console.log("Winner with diagonalCoordinatesLeft");
        return true;
      }
    }

    function checkDiagonalRightLeft() {
      const diagonalCoordinatsRight = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatsRight.push(gameboard[n][2 - n]);
      }
      if (diagonalCoordinatsRight.every((index) => index == userSymbol)) {
        console.log("Winner with checkDiagonalRightLeft");
        return true;
      }
    }
    checkColumn();
    checkRow();
    checkDiagonalLeftRight();
    checkDiagonalRightLeft();
  };

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
    console.log(e.target.innerText);
    if (e.target.innerText !== "") {
      return;
    }
    const userSymbol = getCurrentUserSymbol();
    updateBoard(x, y, userSymbol);
    renderSymbol(e.target, userSymbol);
    switchTurns();
    checkWinner(userSymbol);
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
  resetButton.addEventListener("click", () => {
    squares.forEach((cell) => {
      cell.innerText = "";
    });
    game();
  });
}

game();

resetGame();

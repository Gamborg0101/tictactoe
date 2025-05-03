const layout = () => {};

/* All below is game logic */

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

  let user1 = factoryPlayer("Casper", "x", false);
  let user2 = factoryPlayer("Jens", "o", false);

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
      function checkSingleColumn(n) {
        if (
          gameboard.map((cell) => cell[n]).every((index) => index == userSymbol)
        ) {
          return console.log("Winner with columns", n);
        }
      }
    }

    function checkRow() {
      for (let n = 0; n < 3; n++) {
        checkSingleRow(n);
      }
      function checkSingleRow(n) {
        if (
          gameboard[n].map((cell) => cell).every((index) => index == userSymbol)
        ) {
          return console.log("Winner with rows", n);
        }
      }
    }

    function checkDiagonalLeftRight() {
      const diagonalCoordinatsLeft = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatsLeft.push(gameboard[n][n]);
      }
      if (diagonalCoordinatsLeft.every((index) => index == userSymbol)) {
        return console.log("Winner with diagonalCoordinatsLeft");
      }
    }

    function checkDiagonalRightLeft() {
      const diagonalCoordinatsRight = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatsRight.push(gameboard[n][2 - n]);
      }
      if (diagonalCoordinatsRight.every((index) => index == userSymbol)) {
        return console.log("Winner with checkDiagonalRightLeft");
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
        let coordinates = e.target.classList[1];
        let coordinatesSplit = coordinates.split("-")[1];
        let coordinateX = coordinatesSplit[0];
        let coordinateY = coordinatesSplit[1];

        placeSymbol(coordinateX, coordinateY, e);
      });
    });
  }

  function placeSymbol(x, y, e) {
    const userSymbol = getCurrentUserSymbol();
    updateBoard(x, y, userSymbol);
    renderSymbol(e.target, userSymbol);
    switchTurns();
    checkWinner(userSymbol);
  }
  getCoordinates();

  function renderSymbol(square, symbol) {
    square.innerText = symbol;
    const userPlacement = document.createElement("div");
    square.appendChild(userPlacement);
  }

  function updateBoard(x, y, symbol) {
    gameboard[x][y] = symbol;
  }

  function getCurrentUserSymbol() {
    return user1.userturn ? user1.symbol : user2.symbol;
  }
};

game();
layout();
function resetGame() {
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => {
    const gameboard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  });
}

resetGame();

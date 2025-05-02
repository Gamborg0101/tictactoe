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
    console.log(gameboard);
    function checkColumn() {
      for (let n = 0; n < 3; n++) {
        checkSignleColumn(n);
      }
      function checkSignleColumn(n) {
        console.log(userSymbol);
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

  function placeSymbol(x, y) {
    /* User input here. */
    let userSymbol = user1.userturn ? user1.symbol : user2.symbol;
    gameboard[x][y] = userSymbol;
    switchTurns();

    checkWinner(userSymbol);
  }

  placeSymbol(0, 2);
  placeSymbol(2, 1);
  placeSymbol(0, 0);
  placeSymbol(2, 2);
  placeSymbol(1, 2);
  placeSymbol(2, 0);
};

game();

function resetGame() {
  game();
}
/* TEST TEST */

const game = () => {
  const factoryPlayer = (name, symbol, firstTurn) => {
    const playerSymbol = symbol;
    const playerName = name;
    const userTurn = firstTurn;

    return { playerName, playerSymbol, userTurn };
  };

  let user1 = factoryPlayer("Casper", "x", true);
  let user2 = factoryPlayer("Jens", "y", false);

  // console.log(user1);
  // console.log(user2);

  const gameboard = () => {
    return [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ];
  };

  const gameBoard = gameboard();

  /* userTurn ændres ved hvert kald. */
  const playerTurnChange = () => {
    if (user1.userTurn) {
      user1.userTurn = false;
      user2.userTurn = true;
    } else {
      user1.userTurn = true;
      user2.userTurn = false;
    }
  };

  /* Placering af symbol */
  const symbolPlacementLogic = (x, y) => {
    if (user1.userTurn || user2.userTurn) {
      gameBoard[x][y] = user1.playerSymbol;
    }
  };

  const checkWinner = () => {
    function checkColumn() {
      for (let n = 0; n < 3; n++) {
        checkSignleColumn(n);
      }
      function checkSignleColumn(n) {
        if (gameBoard.map((column) => column[n]).every((index) => index == 1)) {
          return console.log("Winner with columns", n);
        }
      }
    }

    function checkRow() {
      for (let n = 0; n < 3; n++) {
        checkSingleRow(n);
      }
      function checkSingleRow(n) {
        if (gameBoard[n].map((column) => column).every((index) => index == 1)) {
          return console.log("Winner with rows", n);
        }
      }
    }

    /* DIAGONAL CHECK left top - right bottom */
    function checkDiagonalLeftRight() {
      const diagonalCoordinatsLeft = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatsLeft.push(gameBoard[n][n]);
      }
      if (diagonalCoordinatsLeft.every((index) => index == 1)) {
        console.log("Winner with diagonalCoordinatsLeft");
      }
    }

    /* DIAGONAL CHECK right top - left bottom */
    function checkDiagonalRightLeft() {
      const diagonalCoordinatsRight = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatsRight.push(gameBoard[n][2 - n]);
      }
      if (diagonalCoordinatsRight.every((index) => index == 1)) {
        console.log("Winner with checkDiagonalRightLeft");
      }
    }
    checkColumn();
    checkRow();
    checkDiagonalLeftRight();
    checkDiagonalRightLeft();
  };

  checkWinner();

  /* Logik for hver runde */
  const playTurn = () => {
    // let column = parseInt(prompt("Give me an column!"));
    //let row = parseInt(prompt("Give me a row!"));
    let row = 0;
    let column = 0;
    if (row <= 3 || column <= 3) {
      console.log("Invaild input");
    }
    symbolPlacementLogic(column, row);

    playerTurnChange();
  };
  console.log(playTurn());

  const gameEnd = () => {};
};

game();

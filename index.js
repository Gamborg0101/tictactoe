const game = () => {
  const factoryPlayer = (name, symbol) => {
    return { name, symbol, userTurn: false };
  };

  let user1 = factoryPlayer("Casper", "x");
  let user2 = factoryPlayer("Jens", "o");

  const gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const starttingPlayer = () => {
    let selectPlayer = Math.floor(Math.random() * 2);
    if (selectPlayer === 0) {
      return (user1.userTurn = true);
    } else {
      return (user2.userTurn = true);
    }
  };

  const currentPlayer = () => (user1.userTurn ? user1 : user2);

  /* userTurn ændres ved hvert kald. */
  const switchTurns = () => {
    user1.userTurn = !user1.userTurn;
    user2.userTurn = !user2.userTurn;
  };

  /* Placering af symbol */
  const placeSymbol = (x, y) => {
    const player = currentPlayer();

    if (gameboard[x][y] === "") {
      gameboard[x][y] = player.symbol;
      return true;
    } else {
      console.log("Field already taken");
      return false;
    }
  };

  const checkWinner = () => {
    function checkColumn() {
      for (let n = 0; n < 3; n++) {
        checkSignleColumn(n);
      }
      function checkSignleColumn(n) {
        if (gameboard.map((column) => column[n]).every((index) => index == 1)) {
          return console.log("Winner with columns", n);
        }
      }
    }

    function checkRow() {
      for (let n = 0; n < 3; n++) {
        checkSingleRow(n);
      }
      function checkSingleRow(n) {
        if (gameboard[n].map((column) => column).every((index) => index == 1)) {
          return console.log("Winner with rows", n);
        }
      }
    }

    function checkDiagonalLeftRight() {
      const diagonalCoordinatsLeft = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatsLeft.push(gameboard[n][n]);
      }
      if (diagonalCoordinatsLeft.every((index) => index == 1)) {
        console.log("Winner with diagonalCoordinatsLeft");
      }
    }

    function checkDiagonalRightLeft() {
      const diagonalCoordinatsRight = [];
      for (let n = 0; n < 3; n++) {
        diagonalCoordinatsRight.push(gameboard[n][2 - n]);
      }
      if (diagonalCoordinatsRight.every((index) => index == 1)) {
        console.log("Winner with checkDiagonalRightLeft");
      }
    }
  };

  const playTurn = (x, y) => {
    if (!placeSymbol(x, y)) return;

    if (checkWinner()) {
      console.log("Game over!");
      return;
    }
    switchTurns();
    console.log("Next turn:", currentPlayer().name);
  };

  starttingPlayer();
  console.log("Starting player: ", currentPlayer().name);
  playTurn(1, 1);
  console.log(gameboard);
  playTurn(0, 1);
  console.log(gameboard);
};

game();

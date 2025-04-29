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
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 1],
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

  /* Tjekker om spiller har vundet */
  const checkWinner = () => {
    /* COLUMN CHECK */
    function columnCheck() {
      for (let row = 0; row < gameBoard.length; row++) {
        let columnValue = [];
        for (let column = 0; column < gameBoard[row].length; column++) {
          console.log(gameBoard[row][column]);
          column;
        }

        console.log("--------");
      }
      // gameBoard.map((value) => {
      //   console.log(value);
      //   if (value[0] == 1 && value[1] == 1 && value[2] == 1) {
      //     console.log("Winner with columns");
      //   }
      // });
    }

    /*
  
    array.every((value) => value == 1)
*/

    /* ROW CHECK */
    function rowCheck() {
      for (let n = 0; n < gameBoard.length; n++) {
        let cell1 = gameBoard[0][n];
        let cell2 = gameBoard[1][n];
        let cell3 = gameBoard[2][n];
        if (cell1 == 1 && cell1 == cell2 && cell2 == cell3 && cell3 == cell1) {
          console.log("Winner with rows");
        }
      }
    }

    /* DIAGONAL CHECK left top - right bottom */

    function diagonalLeftRightCheck() {
      let cell1 = gameBoard[0][0];
      let cell2 = gameBoard[1][1];
      let cell3 = gameBoard[2][2];
      if (cell1 == 1 && cell1 == cell2 && cell2 == cell3 && cell3 == cell1)
        console.log("Winner with diagonal (left top - right bottom)");
    }

    /* DIAGONAL CHECK right top - left bottom */
    function diagonalRightLeftCheck() {
      let cell1 = gameBoard[0][2];
      let cell2 = gameBoard[1][1];
      let cell3 = gameBoard[2][0];
      if (cell1 == 1 && cell1 == cell2 && cell2 == cell3 && cell3 == cell1)
        console.log("Winner with diagonal (right top - left bottom)");
    }
    diagonalLeftRightCheck();
    diagonalRightLeftCheck();
    rowCheck();
    columnCheck();
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
    console.log(gameBoard);

    playerTurnChange();
  };
  console.log(playTurn());

  const gameEnd = () => {};
};

game();

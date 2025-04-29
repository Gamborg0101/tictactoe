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

  const gameboardFactory = () => {
    const gameBoard = [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ];
    return { gameBoard };
  };

  const gameBoard = gameboardFactory().gameBoard;

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
      gameBoard.map((value) => {
        if (value[0] == 1 && value[1] == 1 && value[2] == 1) {
          console.log("Winner with columns");
        }
      });
    }

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
    /* To do som næste: 
    Hvergang der er lavet en ny placering af symbol, så skal arrayet returneres, 
    og så skal det tjekkes med nedstående muligheder:
    (Det bliver allerede returneret ved gameVoard[x][y]), men det er nok mere passende, 
    hvis jeg gemmer det i en variabel, som jeg kan sende videre til denne funktion, 
    og så efter hver placering af symbol, så skal den lave et tjek. 

    Also: 
    Forsøg at lave en algortime, som udfylder en helt column eller række - 
    så kan jeg bruge den til at tjekke, om en person har udfyldt en række, i stedet for, at tilfældende skal stå på denne måde.
    Når jeg har arrayet, så kan jeg iterer igennem det. <-- Løsningen


Hvis den har en row? F.eks. row[0] == [x,x,x] || row[1] == [x,x,x] row[2] == [x,x,x]
[x,x,x]
[0,0,0]
[0,0,0]

[0,0,0]
[x,x,x]
[0,0,0]

[0,0,0]
[0,0,0]
[x,x,x]

Hvis den har en column? F.eks. column[0] == [x,x,x] || column[1] == [x,x,x] column[2] == [x,x,x]
[x,0,0]
[x,0,0]
[x,0,0]

[0,x,0]
[0,x,0]
[0,x,0]

[0,0,x]
[0,0,x]
[0,0,x]

Specielle tilfælde:

[X,0,0]
[0,X,0]
[0,0,X]

[0,0,X]
[0,X,0]
[X,0,0]

    */
  };

  checkWinner();

  /* Logik for hver runde */
  const playTurn = () => {
    // let column = parseInt(prompt("Give me an column!"));
    // let row = parseInt(prompt("Give me a row!"));
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
/* 

Sekvens: 
Start spil
Navngiv hver spiller
Lav board
Print board

Spiller 1 tur
Opdater array
Skift tur 
Spiller 2 tur
Opdater array 
Skift tur 
Skifte indtil spiller rammer vindersekvens 
Vinner annonceret 
Mulighed for reset

symbolPlacementLogic()
Hvis en har den ønskede sekvens i arrayet, f.eks [0, 1, 2]
Så vinder den person. 

Vindersekvenser: 
[0,1,2]
[3,4,5]
[6,7,8]

[0,3,6]
[1,4,7] 
[2,5,8]

[0,4,8]
[8,4,0] 
[2,4,6] 
[6,4,2] 


else {
return "Tie!"

Måske en mulighed for at kunne trykke "tie" - hvis den ene spiller giver op. 
}

gameplay()
Husk input validation
Start ud med at lave terminal inputs. F.eks. 
Player1: [5]
Player2: [6]
Erstat 0 med x eller o
Skift tur 

Derefter kan jeg manipulere DOM. 

gameplayReset()
Clear board 
Nulstil score


createGameEnv()
Lav et 3x3 grid. 
Når player trykker, så skal der skiftes tur, og elementet skal populates med et o eller x.
0'er de steder, som ikke er optaget. 

winnerAnnouncement()
Announce winner



*/

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
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
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
      console.log(gameBoard);
      playerTurnChange();
    }
  };
  console.log(gameBoard);

  const gameRound = () => {
    let column = prompt("Give me an column!");
    let row = prompt("Give me a row!");
    symbolPlacementLogic(column, row);
  };

  console.log(gameRound());

  const winGameLogic = () => {
    /* To do som næste: 
    Hvergang der er lavet en ny placering af symbol, så skal arrayet returneres, 
    og så skal det tjekkes med nedstående muligheder:
    (Det bliver allerede returneret ved gameVoard[x][y]), men det er nok mere passende, 
    hvis jeg gemmer det i en variabel, som jeg kan sende videre til denne funktion, 
    og så efter hver placering af symbol, så skal den lave et tjek. 

    Also: 
    Forsøg at lave en algortime, som udfylder en helt column eller række - 
    så kan jeg bruge den til at tjekke, om en person har udfyldt en række, i stedet for, at tilfældende skal stå på denne måde.


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

[X,0,0]
[0,X,0]
[0,0,X]

    */
  };

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

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

/* userTurn ændres ved hvert kald. */
const playerTurn = () => {
  if (user1.userTurn) {
    user1.userTurn = false;
    user2.userTurn = true;
  } else {
    user1.userTurn = true;
    user2.userTurn = false;
  }
};

const gameLogic = (x, y) => {
  if (user1.userTurn || user2.userTurn) {
    let gameSetup = gameboardFactory().gameBoard;
    gameSetup[x][y] = user1.playerSymbol;
    console.log(gameSetup);
    playerTurn();
  }
};

const gameRound = () => {
  let column = prompt("Give me an column!");
  let row = prompt("Give me a row!");
  gameLogic(column, row);
};

console.log(gameRound());

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

gameLogic()
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

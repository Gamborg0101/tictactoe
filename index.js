const factoryPlayer = (name, symbol) => {
  const playerName = name;
  const playerSymbol = symbol;

  return { playerName, playerSymbol };
};

let user1 = factoryPlayer("Casper", "x");
let user2 = factoryPlayer("Jens", "y");

const gameboardFactory = () => {
  const gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  return { gameBoard };
};

const playerTurn = () => {};

const gameLogic = (x, y) => {
  let gameSetup = gameboardFactory().gameBoard;
  gameSetup[x][y] = "x";
  console.log(gameSetup);
};

console.log(gameLogic(1, 1));

/* 


Sekvens: 
Start spil
Navngiv hver spiller
Lav board
Spiller 1 tur
Skift tur 
Spiller 2 tur 
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

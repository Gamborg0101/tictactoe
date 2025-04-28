const scoreBoard = () => {
  let thing = 1;

  return { thing };
};

// console.log(scoreBoard);

const factoryPlayer = (name) => {
  const playerName = name;

  return { playerName };
};

const createGameboard = () => {
  const gameBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return { gameBoard };
};

console.log(createGameboard());

const gameLogic = () => {
  /* lose / win logic */
};

/* 
makeBoard()
Meget simpelt array. 


factoryPlayer()
Skal lave 2 spillere, 1 og 2. 
De skal have et navn. 


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

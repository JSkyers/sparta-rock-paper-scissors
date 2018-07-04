var playerscore = 0;
var roboscore = 0;

  function Game() {

    var option = prompt("Would you like 1 - Rock 2 - Paper 3 - Scissors?")
    var rps = ["rock", "paper", "scissors"];
    var robochoice = rps[Math.floor(Math.random() * rps.length)];

      if (option == 1 && robochoice == "rock") {
        Draw();
      } else if (option == 1 && robochoice == "paper"){
        RoboVictory();
      } else if (option == 1 && robochoice == "scissors"){
        PlayerVictory();
      } else if (option == 2 && robochoice == "rock"){
        PlayerVictory();
      } else if (option == 2 && robochoice == "paper"){
        Draw();
      } else if (option == 2 && robochoice == "scissors"){
        RoboVictory();
      } else if (option == 3 && robochoice == "rock"){
        RoboVictory();
      } else if (option == 3 && robochoice == "paper"){
        PlayerVictory();
      } else if (option == 3 && robochoice == "scissors"){
        Draw();
      } else alert("THAT'S NOT A CHOICE!")
      Game();
  }

 function PlayerVictory() {

   robochoice = "";
   option = "";
   playerscore += 1;

    alert ("THE PLAYER WINS THE ROUND! Player " + playerscore + " - Computer " + roboscore)
    if (playerscore == 3) {
        alert("THE PLAYER WINS IT ALL!")
        roboscore = 0;
        playerscore = 0;
      } else {
        Game();
      }
 }

 function RoboVictory() {

   robochoice = "";
   option = "";
   roboscore += 1;

   alert ("THE COMPUTER WINS THE ROUND! Player " + playerscore + " - Computer " + roboscore)
   if (roboscore == 3) {
      alert("THE COMPUTER WINS IT ALL!")
      roboscore = 0;
      playerscore = 0;
    } else {
      Game();
    }
 }

 function Draw() {

   robochoice = "";
   option = "";

   alert("IT'S A TIE! Player " + playerscore + " - Computer " + roboscore);
   Game();
 }

 Game();

function Player (playerMark) {
  this.playerMark = playerMark;
};

Player.prototype.scoreBoard = function(position) {

  var holder = position;
  return holder;
  console.log(holder);
};

Player.prototype.winningCheck = function(score) {
  var winner = " ";
  var winningCombo = {
      row1: [1, 2, 4],
      row2: [8, 16, 32],
      row3: [64, 128, 256],
      col1: [1, 8, 64],
      col2: [2, 16, 128],
      col3: [4, 32, 256],
      cross1: [1, 16, 256],
      cross2: [4, 16, 64]
  };

//debugger;
if (score.length >= 3) {
   var counterRow1 = 0;
  // var counterRow2 = 0
  // var counterRow3 = 0
  // var counterCol1 = 0
  // var counterCol2 = 0
  // var counterCol3 = 0
  // var counterCross1 = 0
  // var counterCross2 = 0
  debugger;
  var counter =0;
  for (var key in winningCombo) {
    console.log(winningCombo[key][1]);
    for (var j = 0; j <= winningCombo[key].length; j++) {
      for (var i = 0; i <= score.length; i++) {
        if (winningCombo[key][j] === score[i])
        {
          //console.log(winningCombo[key][1]);
          counterRow1++;
          if (counterRow1 === 3) {
            winner = "player wins";
          }
        }
      }
    }
 }
}
 return winner;
};





var winning = {
  row1: ["a", "b", "c"],
  row2: ["d", "e", "f"],
  row3: ["g", "h", "i"],
  col1: ["a", "d", "g"],
  col2: ["b", "e", "h"],
  col3: ["c", "f", "i"],
  cross1: ["c", "e", "g"],
  cross2: ["a", "e"]
};

$(document).ready(function(){
  $("form").submit(function(event){
    var player1 = $("input#player1Icon").val();
    var player2 = $("input#player2Icon").val();
    var inputtedPlayer1 = new Player(player1);
    var inputtedPlayer2 = new Player(player2);
    event.preventDefault();
    var count = 0;
    var scorePlayer1 =[];
    var scorePlayer2 =[];
    $("button.game").click(function(event){

      event.preventDefault();

      if (count % 2 === 0) {
        count++;
        $(this).text(inputtedPlayer1.playerMark);
        var player1Position = parseInt(this.id);
        scorePlayer1.push(inputtedPlayer1.scoreBoard(player1Position));
        var winner = inputtedPlayer1.winningCheck(scorePlayer1);
        if (winner === "player wins") {
          alert("Player 1 wins!");
        };
      }
      else {
        count++;
        $(this).text(inputtedPlayer2.playerMark);
        var player2Postion = parseInt(this.id);
        scorePlayer2 = inputtedPlayer2.scoreBoard(player2Position);
        var winner = inputtedPlayer2.winningCheck(scorePlayer2);
        if (winner === "player wins") {
          alert("Player 2 wins!");
        };
      }
  });

  });
  $("button.clear-board").click(function(){
    $("button.game").empty();
  });
});

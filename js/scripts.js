function Player (playerMark) {
  this.playerMark = playerMark;
};

Player.prototype.scoreBoard = function(postion) {
  var holder = "";
   holder += postion;
   return holder;
   console.log(holder);
};

Player.prototype.winningCheck = function(score) {
  var winner = " ";
  var winningCombo = ["abc",
                     "def",
                     "ghi",
                     "adg",
                     "beh",
                     "cfi",
                     "ceg",
                     "aei"];

  winningCombo.forEach(function(index) {
   if (score === index) {
     winner = "player wins";
   };
 });
 return winner;
};

$(document).ready(function(){
  $("form").submit(function(event){
    var player1 = $("input#player1Icon").val();
    var player2 = $("input#player2Icon").val();
    var inputtedPlayer1 = new Player(player1);
    var inputtedPlayer2 = new Player(player2);
    event.preventDefault();
    var count = 0;
    var scorePlayer1 = "";
    var scorePlayer2 = "";
    $("button.game").click(function(event){
      event.preventDefault();
      if (count % 2 === 0) {
        count++;

        $(this).text(inputtedPlayer1.playerMark);
        var player1Postion = this.id;
        scorePlayer1 += inputtedPlayer1.scoreBoard(player1Postion);
        var winner = inputtedPlayer1.winningCheck(scorePlayer1);
        console.log(winner);
        if (winner === "player wins") {
          alert("Player 1 wins!");
        };
        console.log(count);
      }
      else {
        count++;
        $(this).text(inputtedPlayer2.playerMark);
        var player2Postion = this.id;
        scorePlayer2 += inputtedPlayer2.scoreBoard(player2Postion);
        var winner = inputtedPlayer2.winningCheck(scorePlayer2);
        if (winner === "player wins") {
          alert("Player 2 wins!");
        };
      }
    console.log(inputtedPlayer1);
    console.log(inputtedPlayer2);
  });

  });
  $("button.clear-board").click(function(){
    $("button.game").empty();
  });
});

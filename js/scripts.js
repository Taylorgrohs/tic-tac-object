function Player (playerMark) {
  this.playerMark = playerMark;
};

Player.prototype.scoreBoard = function(postion) {
  var holder = "";
  return holder += postion;
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
     winner = "player win";
   };
 });
 return winner;
};

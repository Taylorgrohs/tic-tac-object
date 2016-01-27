function Player (playerMark) {
  this.playerMark = playerMark;
};



Player.prototype.scoreBoard = function(postion) {
  var holder = "";
  return holder += postion;
}
square.push()
square = "abc";






  // $(document).ready(function(){
  //   $("form").submit(function(event){
  //     var player1 = $("input#player1Icon").val();
  //     var player2 = $("input#player2Icon").val();
  //     var inputtedPlayer1 = new Player(player1);
  //     var inputtedPlayer2 = new Player(player2);
  //
  //     inputtedPlayer1.scoreBoard(square)
  //     var count = 0;
  //       $("button.game").click(function(event){
  //       var square = $(this.id).val();
  //       if (count % 2 === 0) {
  //         count++;
  //         $(this).text(inputtedPlayer1.playerMark);
  //       }
  //       else {
  //         count++;
  //         $(this).text(inputtedPlayer2.playerMark);
  //       }
  //     });
  //       event.preventDefault();
  //   });
  // });










//
// $(document).ready(function(){
//   $("form").submit(function(event){
//     var player1 = $("input#player1Icon").val();
//     var player2 = $("input#player2Icon").val();
//     var inputtedPlayer1 = new Player(player1);
//     var inputtedPlayer2 = new Player(player2);
//     event.preventDefault();
//     var count = 0;
//     $("button.game").click(function(event){
//       event.preventDefault();
//         console.log(count);
//
//       if (count % 2 === 0) {
//         count++;
//         $(this).text(inputtedPlayer2.playerMark);
//         $(this).addClass("player2");
//         if ($("#1").hasClass("player2") && $("#2").hasClass("player2") && $("#3").hasClass("player2") || $("#4").hasClass("player2") && $("#5").hasClass("player2") && $("#6").hasClass("player2") ||
//         $("#7").hasClass("player2") && $("#8").hasClass("player2") && $("#9").hasClass("player2") ||
//         $("#1").hasClass("player2") && $("#4").hasClass("player2") && $("#7").hasClass("player2") ||
//         $("#2").hasClass("player2") && $("#5").hasClass("player2") && $("#8").hasClass("player2") || $("#3").hasClass("player2") && $("#6").hasClass("player2") &&
//         $("#9").hasClass("player2") ||
//         $("#1").hasClass("player2") && $("#5").hasClass("player2") &&
//         $("#9").hasClass("player2") ||
//         $("#3").hasClass("player2") && $("#5").hasClass("player2") &&
//         $("#7").hasClass("player2")) {
//           alert("Player2 has won!!!!")
//         }
//         //console.log(count);
//       }
//       else {
//         count++;
//         $(this).text(inputtedPlayer1.playerMark);
//         $(this).addClass("player1");
//         if ($("#1").hasClass("player1") && $("#2").hasClass("player1") && $("#3").hasClass("player1") || $("#4").hasClass("player1") && $("#5").hasClass("player1") && $("#6").hasClass("player1") ||
//         $("#7").hasClass("player1") && $("#8").hasClass("player1") && $("#9").hasClass("player1") ||
//         $("#1").hasClass("player1") && $("#4").hasClass("player1") && $("#7").hasClass("player1") ||
//         $("#2").hasClass("player1") && $("#5").hasClass("player1") && $("#8").hasClass("player1") || $("#3").hasClass("player1") && $("#6").hasClass("player1") &&
//         $("#9").hasClass("player1") ||
//         $("#1").hasClass("player1") && $("#5").hasClass("player1") &&
//         $("#9").hasClass("player1") ||
//         $("#3").hasClass("player1") && $("#5").hasClass("player1") &&
//         $("#7").hasClass("player1")) {
//           alert("Player1 has won!!!!")
//         }
//
//       }
//     console.log(inputtedPlayer1);
//     console.log(inputtedPlayer2);
//   });
//
//   });
//   $("button.clear-board").click(function(){
//     $("button.game").empty();
//   });
// });

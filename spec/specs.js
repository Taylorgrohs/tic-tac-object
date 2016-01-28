describe("Player", function(){
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.playerMark).to.equal("X");
  });
});

describe("Player", function(){
  it("returns the player's mark", function() {
    var testPlayer = new Player("O");
    expect(testPlayer.playerMark).to.equal("O");
  });

  it("will take the id of the clicked button and add it to a string", function(){
    var testPlayer = new Player("X")
    expect(testPlayer.scoreBoard("a")).to.equal("a");
  });
  
  it("will check holder to see if there is a winning combo", function(){
    var testPlayer = new Player("X");
    var score = "abc";
    expect(testPlayer.winningCheck(score)).to.equal("player win");
  });
});

describe("Tictactoe", function() {
  var players;

  beforeEach(function() {
    players = undefined;
  });




  it("should exit two players", function(){

    expect(players).toBeDefined();
    expect(players.length).toBe(2);
  });
  it("should board be valid", function(){
    expect(board).toBeDefined();
  });
  it("should game be played correctly", function(){

    //nro jugadas de cada jugador sea valido
    //expect(board).toBeDefined();
  });
  it("player one won should be victorious in a winning position", function(){});


});

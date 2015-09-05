describe("Tictactoe", function() {
  var playerX, playerO, players, board;

  beforeEach(function() {

    playerX = new Player();
    playerO = new Player();
    players = [playerX, playerO];
    board = new Board();
  });


  it("should exist two players", function(){

    expect(playerX instanceof Player).toBeTruthy();
    expect(playerO instanceof Player).toBeTruthy();
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

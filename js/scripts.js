function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
  this.turn = true;
  this.owns = [];
}

function Square(position) {
  this.position = position;
  this.owner = "";
}


function reInitialize() {
  $(".game-square").css("background-image", "");
  switchTurn();
  gameBoard = [];
  playerOne.owns = []; 
  playerTwo.owns = []; 
  for (i = 0; i < 9; i++) {
    gameBoard.push(new Square(i + 1));
  }
}

//Function to switch turn
function switchTurn() {
  playerOne.turn = !playerOne.turn;
  playerTwo.turn = !playerTwo.turn;
  if (playerOne.turn) {
    $(".playerTurnName").text(playerOne.name);
  } else {
    $(".playerTurnName").text(playerTwo.name);
  }
}

// function selectSquareClick(playerTurn) {
//
// }

function winCondition1() {
  if (playerOne.owns.includes(0) && playerOne.owns.includes(1) && playerOne.owns.includes(2)) {
    return true;
  } else if (playerOne.owns.includes(3) && playerOne.owns.includes(4) && playerOne.owns.includes(5)) {
    return true;
  } else if (playerOne.owns.includes(6) && playerOne.owns.includes(7) && playerOne.owns.includes(8)) {
    return true;
  } else if (playerOne.owns.includes(0) && playerOne.owns.includes(3) && playerOne.owns.includes(6)) {
    return true;
  } else if (playerOne.owns.includes(1) && playerOne.owns.includes(4) && playerOne.owns.includes(7)) {
    return true;
  } else if (playerOne.owns.includes(2) && playerOne.owns.includes(5) && playerOne.owns.includes(8)) {
    return true;
  } else if (playerOne.owns.includes(0) && playerOne.owns.includes(4) && playerOne.owns.includes(8)) {
    return true;
  } else if (playerOne.owns.includes(2) && playerOne.owns.includes(4) && playerOne.owns.includes(6)) {
    return true;
  } else {
    return false;
  }
}

function ticTacTroll() {
  alert("Congrats! Click 'OK' for victory animation!"); 
  window.location = "https://www.youtube.com/watch?v=66tQR7koR_Q&t=10s";
}

function tie() {
  var isTie = true; 
  for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i].owner === ""){
      isTie = false; 
    }
  }
  return isTie; 
}

function winCondition2() {
  if (playerTwo.owns.includes(0) && playerTwo.owns.includes(1) && playerTwo.owns.includes(2)) {
    return true;
  } else if (playerTwo.owns.includes(3) && playerTwo.owns.includes(4) && playerTwo.owns.includes(5)) {
    return true;
  } else if (playerTwo.owns.includes(6) && playerTwo.owns.includes(7) && playerTwo.owns.includes(8)) {
    return true;
  } else if (playerTwo.owns.includes(0) && playerTwo.owns.includes(3) && playerTwo.owns.includes(6)) {
    return true;
  } else if (playerTwo.owns.includes(1) && playerTwo.owns.includes(4) && playerTwo.owns.includes(7)) {
    return true;
  } else if (playerTwo.owns.includes(2) && playerTwo.owns.includes(5) && playerTwo.owns.includes(8)) {
    return true;
  } else if (playerTwo.owns.includes(0) && playerTwo.owns.includes(4) && playerTwo.owns.includes(8)) {
    return true;
  } else if (playerTwo.owns.includes(2) && playerTwo.owns.includes(4) && playerTwo.owns.includes(6)) {
    return true;
  } else {
    return false;
  }
}

  var playerOne = new Player("Player One", "X");
  var playerTwo = new Player("Player Two", "O");
  playerOne.turn = true; 
  var gameBoard = [];
  for (var i = 0; i < 9; i++) {
    gameBoard.push(new Square(i + 1));
  }

$(document).ready(function() {
  $(".playerTurnName").text(playerOne.name);   
  $(".game-square").click(function() {
    var squareId = parseInt($(this).attr('id'));
    if (gameBoard[squareId].owner === "") {
      if (playerOne.turn === true) {
        gameBoard[squareId].owner = playerOne.symbol;
        $(this).css("background-size", "contain"); 
        $(this).css("background-image", "url('img/imageX.png')");
      playerOne.owns.push(squareId);
        if (winCondition1()) {
          alert(playerOne.name + ' wins!'); 
          ticTacTroll();  
        } else if (tie()){
          alert("You tied!");
          ticTacTroll();
          $(".game-square").css("background-image", "");
        } else {
          switchTurn();
        }
      } else {
        gameBoard[squareId].owner = playerTwo.symbol;
        $(this).css("background-size", "contain"); 
        $(this).css("background-image", "url('img/imageO.png')");
        playerTwo.owns.push(squareId);
        if (winCondition2()) {
          alert(playerTwo.name + ' wins!');
          $(".game-square").css("background-image", "");
          ticTacTroll(); 
        } else if (tie()) {
          alert("You tied!");
          ticTacTroll();
          $(".game-square").css("background-image", "");
        } else {
          switchTurn(); 
        } 
      }
    } else {
      alert("That square is already taken!"); 
    }
  });
});

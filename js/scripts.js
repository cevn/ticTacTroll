// Player object and Square object constructors 
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

function switchTurn() {
  playerOne.turn = !playerOne.turn;
  playerTwo.turn = !playerTwo.turn;
  if (playerOne.turn) {
    $(".playerTurnName").text(playerOne.name);
  } else {
    $(".playerTurnName").text(playerTwo.name);
  }
}

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

// sound effect functions
function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}

function playSound2() {
  var sound2 = document.getElementById("audio1");
  sound2.play(); 
}

function playVictorySound() {
  var victory = document.getElementById("victory");
  victory.play(); 
}

function playTieSound() {
  var tie = document.getElementById("tie"); 
  tie.play(); 
}

// boolean to check for tie
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


// initialize game
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
        $(this).css("background-image", "url('img/bongo.png')");
        playSound(); 
      playerOne.owns.push(squareId);
        if (winCondition1()) {
          playVictorySound(); 
          $(this).css("background-size", "contain"); 
          $(this).css("background-image", "url('img/bongo.png')");
          setTimeout(function() {alert(playerOne.name + ' wins!'); }, 100); 
          setTimeout(function() {window.location = "https://www.youtube.com/watch?v=66tQR7koR_Q&t=10s";}, 100); 
        } else if (tie()){
          $(this).css("background-size", "contain"); 
          $(this).css("background-image", "url('img/bongo.png')");
          playTieSound(); 
          setTimeout(function() {alert('NOBODY wins!'); },  100)
          setTimeout(function() {window.location = "https://www.quora.com/How-do-you-get-good-at-something";}, 100);  
        } else {
          switchTurn();
        }
      } else {
        gameBoard[squareId].owner = playerTwo.symbol;
        $(this).css("background-size", "contain"); 
        $(this).css("background-image", "url('img/imageO.png')"); 
        playSound2();
        playerTwo.owns.push(squareId);
        if (winCondition2()) {
          playVictorySound(); 
          $(this).css("background-size", "contain"); 
          $(this).css("background-image", "url('img/imageO.png')"); 
          setTimeout(function() {alert(playerTwo.name + ' wins!'); },  100);
          setTimeout(function() {window.location = "https://www.youtube.com/watch?v=66tQR7koR_Q&t=10s";}, 100);  
        } else if (tie()) {
          $(this).css("background-size", "contain"); 
          $(this).css("background-image", "url('img/imageO.png')");
          playTieSound(); 
          setTimeout(function() {alert('NOBODY wins!'); },  100)
          setTimeout(function() {window.location = "https://www.quora.com/How-do-you-get-good-at-something";}, 100);  
        } else {
          switchTurn(); 
        } 
      }
    } else {
      alert("That square is already taken!"); 
    }
  });
});

var turn = "x";
var plays = 0;
done = "no";
opp = "computer";
var spaces = ["s5","s1","s3","s7","s9","s2","s4","s6","s7"];
var xused = [];
var oused = [];
var level = 1;

function clicker(sid){
  if(done == "yes"){
    return;
  }
  a = document.getElementById(sid);
  switch (a.innerHTML) {
    case "X":
      break;
    case "O":
      break;
    default:
      if(turn == "x"){
        a.innerHTML = "X";
        turn = "o";
        plays++;
        xused.push(a.id);
      } else {
        a.innerHTML = "O";
        turn = "x";
        plays++;
        oused.push(a.id);
      }
      break;
  }

  if(plays > 4) {
    isWinner("X","s1","s2","s3");
    isWinner("X","s4","s5","s6");
    isWinner("X","s7","s8","s9");
    isWinner("X","s1","s5","s9");
    isWinner("X","s3","s5","s7");
    isWinner("X","s1","s4","s7");
    isWinner("X","s2","s5","s8");
    isWinner("X","s3","s6","s9");
  }

  if(done == "no") {
  if(opp == "computer"){
    switch (level) {
      case "4":
        playSpace = findRows("X");
        if(playSpace == ""){
          playSpace = findRows("O");
        }
        if(playSpace == ""){
          for(var i = 0;i < 9;i++){
            oPlays(spaces[i]);
            if(turn == "x"){
              break;
            }
          }
        } else {
          oPlays(playSpace);
          turn = "x";
          playSpace = "";
        }
        break;
      case "3":
        playSpace = findRows("O");
        if(playSpace == ""){
          for(var i = 0;i < 9;i++){
            oPlays(spaces[i]);
            if(turn == "x"){
              break;
            }
          }
        } else {
          oPlays(playSpace);
          turn = "x";
          playSpace = "";
        }
        break;
      case "2":
        playSpace = findRows("X");
        if(playSpace == ""){
          for(var i = 0;i < 9;i++){
            oPlays(spaces[i]);
            if(turn == "x"){
              break;
            }
          }
        } else {
          oPlays(playSpace);
          turn = "x";
          playSpace = "";
        }
        break;
      default:
        for(var i = 0;i < 9;i++){
          oPlays(spaces[i]);
          if(turn == "x"){
            break;
          }
        }
        break;
      }
    }
  }

  if(plays > 4){
    isWinner("O","s1","s2","s3");
    isWinner("O","s4","s5","s6");
    isWinner("O","s7","s8","s9");
    isWinner("O","s1","s5","s9");
    isWinner("O","s3","s5","s7");
    isWinner("O","s1","s4","s7");
    isWinner("O","s2","s5","s8");
    isWinner("O","s3","s6","s9");
  }

  if(plays == 9) {
    if(done == "no") {
      updateTop("It's A Tie");
      uCount("ties")
      done = "yes";
    }
  }
}

function updateTop(noise){
  a = document.getElementById('topalert');
  a.innerHTML = noise;
}
function uCount(adder){
  if(adder == "ties"){
    var a = document.getElementById('ties');
    a.innerHTML++;
  } else {
    var theWinner = adder + "wins";
    var a = document.getElementById(theWinner);
    a.innerHTML++;
  }
}
function oPlays(spaceName){
  if (document.getElementById(spaceName).innerHTML == "") {
  document.getElementById(spaceName).innerHTML = "O";
  turn = "x";
  plays++;
  oused.push(document.getElementById(spaceName).id);
  }
}

function isWinner(who,p1,p2,p3){
  if(done == "no"){
  if(document.getElementById(p1).innerHTML == who){
    if(document.getElementById(p2).innerHTML == who){
      if(document.getElementById(p3).innerHTML == who){
        updateTop(who + " wins");
        uCount(who);
        done = "yes";
      }
    }
  }
  }
}

function findRows(marker) {
  var found = false;
  var last = "";
  var toTake = "";
  toTake = isRow(marker,"s1","s2","s3");
  if(toTake == "") {
    toTake = isRow(marker,"s4","s5","s6");
  }
  if(toTake == "") {
    toTake = isRow(marker,"s7","s8","s9");
  }
  if(toTake == "") {
    toTake = isRow(marker,"s1","s5","s9");
  }
  if(toTake == "") {
    toTake = isRow(marker,"s3","s5","s7");
  }
  if(toTake == "") {
    toTake = isRow(marker,"s1","s4","s7");
  }
  if(toTake == "") {
    toTake = isRow(marker,"s2","s5","s8");
  }
  if(toTake == "") {
    toTake = isRow(marker,"s3","s6","s9");
  }
  return toTake;
}

function isRow(who,p1,p2,p3){
  var counter = 0;
  if(who == "X"){
    ponent = "O";
  } else {
    ponent = "X";
  }
  if(document.getElementById(p1).innerHTML == who){
        counter++;
  } else {
    if(document.getElementById(p1).innerHTML == ponent) {
        counter += 10;
    } else {
      last = p1;
    }
  }
  if(document.getElementById(p2).innerHTML == who){
        counter++;
  } else {
    if(document.getElementById(p2).innerHTML == ponent) {
        counter += 10;
    } else {
      last = p2;
    }
  }
  if(document.getElementById(p3).innerHTML == who){
        counter++;
  } else {
    if(document.getElementById(p3).innerHTML == ponent) {
        counter += 10;
    } else {
      last = p3;
    }
  }
  if(counter == 2){
    return last;
  } else {
    return "";
  }

}

function newGame(){
  updateTop("Tom Tac Toe");
  plays = 0;
  done = "no";
  turn = "x";
  xused = [];
  oused = [];
  var x = document.getElementsByClassName("toe");
  for(var a = 0; a < 3;a++) {
    for(var b = 0; b < 3;b++) {
      x[0].rows[a].cells[b].innerHTML = "";
    }
  }
}

function setOpp(){
  var a = document.getElementById('opp').value;
  opp = a;
}

function changeLevel() {
  var a = document.getElementById('level').value;
  level = a;
}

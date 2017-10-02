const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var xo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var x = [];
var o = [];
var xVal = 'X';
var oVal = '0';
// FUNCTIONS
var turnRun = function(i) {
  if(finalResult()){
    generatexo();
  }
  // var turn = 'X';
  if (i % 2 == 0) {
    turn = xVal;
  } else {
    turn = oVal;
  }
  rl.question('Input ' + turn + '? ', (answer) => {
    x.push(answer);
    if (xo[answer - 1] === parseInt(xo[answer - 1])) {
      xo[answer - 1] = turn;
    }
    i++;
    turnRun(i);
  });
}
var generatexo = function() {
  console.log('\033c');
  console.log(' --- --- --- ');
  console.log('| ' + xo[0] + ' | ' + xo[1] + ' | ' + xo[2] + ' |');
  console.log(' --- --- --- ');
  console.log('| ' + xo[3] + ' | ' + xo[4] + ' | ' + xo[5] + ' |');
  console.log(' --- --- --- ');
  console.log('| ' + xo[6] + ' | ' + xo[7] + ' | ' + xo[8] + ' |');
  console.log(' --- --- --- ');
}
var finalResult = function() {
  //conditions
  var condX1 = (xo[0] == xVal && xo[1] == xVal && xo[2] == xVal);
  var condO1 = (xo[0] == oVal && xo[1] == oVal && xo[2] == oVal);
  var condX2 = (xo[3] == xVal && xo[4] == xVal && xo[5] == xVal);
  var condO2 = (xo[3] == oVal && xo[4] == oVal && xo[5] == oVal);
  var condX3 = (xo[6] == xVal && xo[7] == xVal && xo[8] == xVal);
  var condO3 = (xo[6] == oVal && xo[7] == oVal && xo[8] == oVal);
  var condX4 = (xo[2] == xVal && xo[5] == xVal && xo[8] == xVal);
  var condO4 = (xo[2] == oVal && xo[5] == oVal && xo[8] == oVal);
  var condX5 = (xo[6] == xVal && xo[3] == xVal && xo[0] == xVal);
  var condO5 = (xo[6] == oVal && xo[3] == oVal && xo[0] == oVal);
  var condX6 = (xo[1] == xVal && xo[4] == xVal && xo[7] == xVal);
  var condO6 = (xo[1] == oVal && xo[4] == oVal && xo[7] == oVal);
  var condX7 = (xo[0] == xVal && xo[4] == xVal && xo[8] == xVal);
  var condO7 = (xo[0] == oVal && xo[4] == oVal && xo[8] == oVal);
  var condX8 = (xo[6] == xVal && xo[4] == xVal && xo[2] == xVal);
  var condO8 = (xo[6] == oVal && xo[4] == oVal && xo[2] == oVal);
  if (condX1 || condX2 || condX3 || condX4 || condX5 || condX6 || condX7 || condX8) {
    console.log(' ---------- ');
    console.log(' ' + xVal + ' Wins! ');
    console.log(' ---------- ');
    return false;
  }
  if (condO1 || condO2 || condO3 || condO4 || condO5 || condO6 || condO7 || condO8) {
    console.log(' ---------- ');
    console.log(' ' + oVal + ' Wins! ');
    console.log(' ---------- ');
    return false;
  }
  return true;
}
// first START
turnRun(0);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



var xo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var x = [];
var o = [];



// FUNCTIONS

var turnRun = function(i) {
  generatexo();
  var turn = 'X';
  if (i % 2 == 0) {
    turn = 'X';
  } else {
    turn = 'O';
  }
  rl.question('Input ' + turn + '? ', (answer) => {
    x.push(answer);
    if(xo[answer - 1] === parseInt(xo[answer - 1])){
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

// first START
turnRun(0);

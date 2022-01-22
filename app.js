var button1 = document.querySelector('#B1press');
var button2 = document.querySelector('#B2Press');
var dropDown = document.querySelector('#dropDown');

var reset = document.querySelector('#reset');
var player1 = document.querySelector('#P1player');
var player2 = document.querySelector('#P2player');



let score1 = 0;
let winningScore = 3;

isGameOver = false;

button1.addEventListener('click', function() {
    if (!isGameOver) {
        score1 += 1;
        if (score1 === winningScore) {
            isGameOver = true;
            player1.classlist.add = ('has-text-success')
            player2.classlist.add = ('has-text-danger')
        }
        player1.textContent = score1;

    }

});

dropDown.addEventListener('input', function() {
    winningScore = parseInt(this.value);
    reseet();
})

let score2 = 0;
button2.addEventListener('click', function() {
    if (!isGameOver) {
        score2 += 1;
        if (score2 === winningScore) {
            isGameOver = true;
            player1.classlist.add = ('has-text-success')
            player2.classlist.add = ('has-text-danger')
        }
        player2.textContent = score2;

    }

});


reset.addEventListener('click', reseet);


function reseet() {

    isGameOver = false;
    score1 = 0;
    score2 = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    player1.classlist.remove = ('has-text-success', 'has-text-danger')
    player2.classlist.remove = ('has-text-success', 'has-text-danger')
}
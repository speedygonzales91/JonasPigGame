/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

// Roll button implementation
document.querySelector('.btn-roll').addEventListener('click', function(){

    if (gamePlaying) {

    // Pick a random number
    var dice = Math.floor(Math.random() * 6) + 1; //generate random number between 1 and 6

    // Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

    // Update the round score IF the rolled number was not 1
        if(dice !== 1) {
            // Add score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
                nextPlayer();
        }
    }
})

// Hold button implementation
document.querySelector('.btn-hold').addEventListener('click', function(){

    if (gamePlaying) {
    // Add current score to global score
    scores[activePlayer] += roundScore;

    // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
        if (scores[activePlayer] >= 20) {
            // Change the Actual player to winner
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            // Hide dice
            document.querySelector('.dice').style.display = 'none';

            // Add winner class to player panel
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            // Remove active class from player panel
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;

        } else {
            // Change player
            nextPlayer();
        }
    }
})

// New Game button implementation
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

// Set the UI (current values) to default - with zero values
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

// Set active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.getElementById('player-0-panel').classList.remove('active');
    //document.getElementById('player-1-panel').classList.add('active');

// Hide the dice when change palyer
    document.querySelector('.dice').style.display = 'none';
}

function init() {
    scores = [0,0]; //each play's score in an array
    roundScore = 0;  //only one round score at a time
    activePlayer = 0; //this will be used to read out score array as well - so 0->first player and 1->second player
    gamePlaying = true;

    // Make the current and player score to zero
        document.getElementById('score-0').textContent ='0';
        document.getElementById('current-0').textContent ='0';
        document.getElementById('score-1').textContent ='0';
        document.getElementById('current-1').textContent ='0';
        document.getElementById('name-0').textContent ='Player 1';
        document.getElementById('name-1').textContent ='Player 2';

    // Remove unnecessary clases to start the game
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');

    // Add back active class to player 1
        document.querySelector('.player-0-panel').classList.add('active');

    // hide the dice when page loads
        document.querySelector('.dice').style.display = 'none';
}


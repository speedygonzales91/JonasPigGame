/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0]; //each play's score in an array
roundScore = 0;  //only one round score at a time
activePlayer = 0; //this will be used to read out score array as well - so 0->first player and 1->second player

// Make the current and player score to zero
document.getElementById('score-0').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-1').textContent ='0';

// hide the dice when page loads
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function(){

    // Pick a random number
        var dice = Math.floor(Math.random() * 6) + 1; //generate random number between 1 and 6

    // Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

    //Update the round score IF the rolled number was not 1
})
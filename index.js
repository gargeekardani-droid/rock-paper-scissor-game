let score = JSON.parse(localStorage.getItem('score')) || {
      Wins: 0,
      Losses: 0,
      Ties: 0
    };

    
    updateScoreElement();

    function playerGame(playerMove) {
      const compMoves = pickCompMove();

      let result = '';
      if (playerMove == 'Rock') {

        if (compMoves === 'Rock') {
          result = 'Tie.'
        } else if (compMoves === 'Paper') {
          result = 'You lose.'
        } else if (compMoves === 'Scissors') {
          result = 'You win!!.'
        }

      } else if (playerMove == 'Paper') {
        if (compMoves === 'Rock') {
          result = 'You win!!.'
        } else if (compMoves === 'Paper') {
          result = 'Tie.'
        } else if (compMoves === 'Scissors') {
          result = 'You lose.'
        }

      } else if (playerMove == 'Scissors') {
        if (compMoves === 'Rock') {
          result = 'You lose.'
        } else if (compMoves === 'Paper') {
          result = 'You win!!.'
        } else if (compMoves === 'Scissors') {
          result = 'Tie.'
        }

      }

      if (result === 'You win!!.') {
        score.Wins += 1;
      } else if (result === 'You lose.') {
        score.Losses += 1;
      } else if (result === 'Tie.') {
        score.Ties += 1;
      }


      localStorage.setItem('score', JSON.stringify(score));
      
      updateScoreElement();

      document.querySelector('.js-result')
        .innerHTML = result;

      document.querySelector('.js-moves')
        .innerHTML = ` You 
    <img src="${playerMove}-emoji.png" class="move-icon" alt="">
    <img src="${compMoves}-emoji.png" class="move-icon" alt="">
    Computer`;

      
    }

    function updateScoreElement() {     
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses},Ties: ${score.Ties}`;
    }

    function pickCompMove() {
      const randomNum = Math.random();
      let compMoves = '';

      if (randomNum >= 0 && randomNum < 1 / 3) {
        compMoves = 'Rock';
      } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        compMoves = 'Paper';
      } else if (randomNum >= 2 / 3 && randomNum < 1) {
        compMoves = 'Scissors';
      }
      return compMoves;
    }

document.addEventListener("keydown",function(event){
  if (event.key === 'r') {
    playerGame('Rock');
    buttonEffect('.rock');

  }
  else if(event.key === 'p'){
    playerGame('Paper');
    buttonEffect('.paper');
  }
  else if(event.key === 's'){
    playerGame('Scissors');
    buttonEffect('.scissors');
  }

});
function buttonEffect(selector) {
  const button = document.querySelector(selector);
  button.classList.add('pressed');
  setTimeout(function(){
    button.classList.remove('pressed');
  },150);
}


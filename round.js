class Round {
	constructor(player1, player2, player3, currentRound) {
		this.currentRound = currentRound || 1;	
    this.players = [player1, player2, player3];
    this.currentPlayer = player1;
    this.counter = 0;
    this.previousPlayer = player1
  }

  changePlayer() {
    this.counter++;
    if (!this.players[this.counter]) {
      this.counter = 0;
      this.previousPlayer = this.currentPlayer
      this.currentPlayer = this.players[this.counter]
    } else {
      this.previousPlayer = this.currentPlayer;
      this.currentPlayer = this.players[this.counter]
    }
  }

  displayCurrentPlayerTurn() {
    $('.player-turn-display').text(`Player ${round.currentPlayer.name}.. your turn!`);
  }

  highlightCurrentPlayerTurn() {
    $(`.avatar${this.previousPlayer.name}`).removeClass('highlight-avatar');
    $(`.avatar${this.currentPlayer.name}`).addClass('highlight-avatar');
    // debugger;
  };

  resetAvatar() {
    $(`.avatar`).removeClass('highlight-avatar');
  }

  newRound() {
    domUpdates.resetPuzzleBoard();
    domUpdates.resetLetters();
    puzzle.selectPuzzleBank(puzzleBankIndex);
    this.currentPlayer = player1;
    this.resetAvatar();
    domUpdates.displayPlayerTurn();
    domUpdates.highlightAvatarTurn();
    this.currentRound++;
    $('.value-display').text('');
  };

  createBonusRound() {
    
  }
}



if (typeof module !== 'undefined') {
  module.exports = Round;
}


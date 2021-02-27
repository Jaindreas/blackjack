class Game {
    constructor(score, name) {
    this.score = score;
    this.name = name;
    }
    hitMe() {
     let displayScore = document.getElementById("score")
     let card = Math.round(Math.random() * (10 - 1) + 1);
     console.log(card)
     this.score += card;
     displayScore.innerHTML = this.score
     player.checkGameWinOrLose();
    }
    checkGameWinOrLose() {
        if (this.score > 21) {
        let displayMessage = document.getElementById("message")
        displayMessage.innerHTML = `${this.name} bust `;
        document.getElementById("hitMe").disabled = true;
        document.getElementById("stick").disabled = true;
        } else if (this.score === 21) {
        let displayMessage = document.getElementById("message")
        displayMessage.innerHTML = `${this.name} Wins!`;
        document.getElementById("hitMe").disabled = true;
        document.getElementById("stick").disabled = true;
        }
    }
    stick () {
        let displayStickScore = document.getElementById("stickScore")
        displayStickScore.innerHTML = `${this.name} Stick: ${this.score}`
        player.finalScore = this.score;
        document.getElementById("hitMe").disabled = true;
        document.getElementById("stick").disabled = true;
    }
    dealerHit() {
        let dealerScore = document.getElementById("dealerScore")
        let dScore = Math.round(Math.random() * (21 - 11) + 11);
        dealerScore.innerHTML = dScore;
        document.getElementById("dealerHit").disabled = true;
        if (dScore > player.finalScore) {
            let displayMessage = document.getElementById("winLose")
            displayMessage.innerHTML = `Dealer Wins!`;
        } else if (dScore < player.finalScore) {
            let displayMessage = document.getElementById("winLose")
            displayMessage.innerHTML = `Player Wins!`;
    }
  }
}

let player = new Game(0, "Player");
let dealer = new Game(0, "Dealer");

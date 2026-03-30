function rockPaperScissors() {
    let player1 = prompt("Player 1, enter rock, paper, or scissors:").toLowerCase()
    let player2 = prompt("Player 2, enter rock, paper, or scissors:").toLowerCase()

    switch(player1) {
        case "rock":
            switch(player2) {
                case "rock":
                    alert("draw")
                    break
                case "paper":
                    alert("player 2 wins")
                    break
                case "scissors":
                    alert("player 1 wins")
                    break
                default:
                    alert("player 2 entered wrong")
            }
            break
        case "paper":
            switch(player2) {
                case "rock":
                    alert("Pplayer 1 wins")
                    break
                case "paper":
                    alert("draw")
                    break
                case "scissors":
                    alert("player 2 win")
                    break
                default:
                    alert("layer 2 entered error choise")
            }
            break
        case "scissors":
            switch(player2) {
                case "rock":
                    alert("player 2 wins")
                    break
                case "paper":
                    alert("player 1 wins")
                    break
                case "scissors":
                    alert("Draw")
                    break
                default:
                    alert("player 2 error choice")
            }
            break
        default:
            alert("player 1 entered error choice")
    }
}
rockPaperScissors()
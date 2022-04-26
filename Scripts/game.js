let board = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0
const symbols = ["o", "x"]
let gameOver = false
let xWin = 0
let oWin = 0

let handleMove = (position) => {
    if (gameOver) {
        return;
    }

    if (gameOver == false) {
        if (board[position] == "") {
            board[position] = symbols[playerTime]
            gameOver = victory()
            if (playerTime == 0) {
                playerTime = 1
            }
            else {
                playerTime = 0
            }
        }
        else {
            alert("Esse quadrado já foi preenchido, preencha outro por favor !")
        }
    }
    return gameOver
}

let victory = () => {
    let victoryStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < victoryStates.length; i++) {
        let seq = victoryStates[i]

        if (board[seq[0]] == board[seq[1]] && board[seq[1]] == board[seq[2]] && board[seq[0]] != 0) {
            if (board[seq[0]] == "x") {
                xWin = xWin + 1
                win()
                xWon()
            } else {
                oWin = oWin + 1
                win()
                oWon()
            }
            return true;
        }

    }
    return false;
}

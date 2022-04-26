const cell = document.querySelectorAll(".cell")
const x = document.getElementById("divx")
const o = document.getElementById("divo")
const restartBTN = document.getElementById("restartBTN")
const scoreCleanBTN = document.getElementById("scoreCleanBTN")
let cont = 0

document.addEventListener("DOMContentLoaded", () => {

    cell.forEach((element) => {
        element.addEventListener("click", handleClick)
    });

})

let handleClick = (square) => {
    let cub = square.target
    let position = cub.id
    handleMove(position)
    checkCont()
    updateSquare()
    cont++
}

let updateSquare = () => {
    cell.forEach((element) => {
        let postion = element.id
        let symbol = board[postion]

        if (symbol != "") {
            element.innerHTML = "<div class=" + symbol + "></div>"
        }
    });
}

let win = () => {
    x.innerHTML = xWin
    o.innerHTML = oWin
}

function xWon() {
    alert("X ganhou, parabéns !")
}

function oWon() {
    alert("O ganhou, parabéns !")
}
restartBTN.addEventListener("click", restart)
scoreCleanBTN.addEventListener("click", scoreClean)

function restart() {
    board = ["", "", "", "", "", "", "", "", ""]
    playerTime = 0
    gameOver = false
    cell.forEach((element) => {
        element.innerHTML = ""
    })
}

function scoreClean() {
    xWin = 0
    oWin = 0
    x.innerHTML = "0"
    o.innerHTML = "0"
}

function checkCont() {
    if (cont == 9 && gameOver == false) {
        restart()
    }
}
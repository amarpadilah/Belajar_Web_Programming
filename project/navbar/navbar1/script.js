const resetButton = document.querySelector("#reset");
const squares = document.querySelectorAll(".square");
const message = document.querySelector("#message");
let turn = "X";

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        if (this.textContent === "") {
            this.textContent = turn;
            checkForWin();
            turn = turn === "X" ? "O" : "X";
        }
    });
}

resetButton.addEventListener("click", function() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
    message.textContent = "";
    turn = "X";
});

function checkForWin() {
    if (
        squares[0].textContent === turn &&
        squares[1].textContent === turn &&
        squares[2].textContent === turn
    ) {
        message.textContent = turn + " wins!";
    } else if (
        squares[3].textContent === turn &&
        squares[4].textContent === turn &&
        squares[5].textContent === turn
    ) {
        message.textContent = turn + " wins!";
    }
    // ... dan seterusnya
}
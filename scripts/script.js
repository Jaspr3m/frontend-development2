const h1 = document.querySelector("h1").innerHTML = "Newgrounds"
const buttons = document.querySelectorAll("button")

function gamesButton() {
    buttons[1].style.backgroundColor = "orange"
}

function artButton() {
    buttons[3].style.backgroundColor = "red"
}

function clickMe(answer) {
    answer = "Shit!"
    buttons[7].innerHTML = answer
}


buttons[1].addEventListener("onclick", gamesButton())
buttons[3].addEventListener("onclick", artButton())
buttons[7].addEventListener("onclick", clickMe())
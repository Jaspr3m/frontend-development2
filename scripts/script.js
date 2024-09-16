const buttons = document.querySelectorAll("button")

function goToGames() {
    window.location.href = "index.html"
}

function goToArt() {
    window.location.href = "art.html"
}

buttons[1].addEventListener("click", goToGames)
buttons[3].addEventListener("click", goToArt)
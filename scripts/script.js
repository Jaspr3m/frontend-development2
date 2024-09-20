const buttons = document.querySelectorAll("button")

function goToGames() {
    window.location.href = "index.html"
}

function goToArt() {
    window.location.href = "art.html"
}

// als de pagina art.html is,   doe de tweede grid style en haal de eerste grid style weg
// als de pagina index.html is, doe de eerste grid style en haal de tweede grid style weg


buttons[1].addEventListener("click", goToGames)
buttons[3].addEventListener("click", goToArt)
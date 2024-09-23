const links = document.querySelectorAll("a")

function goToGames() {
    window.location.href = "index.html"
}

function goToArt() {
    window.location.href = "art.html"
}

links[1].addEventListener("click", goToGames)
links[3].addEventListener("click", goToArt)
const links = document.querySelectorAll("a")

function goToGames() {
    window.location.href = "games.html"
}

function gotoCommunity() {
    window.location.href = "community.html"
}

links[1].addEventListener("click", goToGames)
links[5].addEventListener("click", gotoCommunity)
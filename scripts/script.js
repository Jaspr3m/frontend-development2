const links = document.querySelectorAll("a")

function goToGames() {
    window.location.href = "index.html"
    // document.querySelector("article>ul").style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
}

function goToArt() {
    window.location.href = "art.html"
    // document.querySelector("article>ul").style.gridTemplateColumns = "1fr 1fr 1fr"
}

links[1].addEventListener("click", goToGames)
links[3].addEventListener("click", goToArt)
const hamburger = document.querySelector ("#hamburger")
      textTop = document.querySelector ("#text-top")

hamburger.onclick = () => {
    hamburger.classList.toggle("hamburgerOpen")
    textTop.classList.toggle("textTopOpen")
    document.body.classList.toggle("body-mobile")
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.onclick = () => {
        hamburger.classList.remove("hamburgerOpen")
        textTop.classList.remove("textTopOpen")
        document.body.classList.remove("body-mobile")
    }
})

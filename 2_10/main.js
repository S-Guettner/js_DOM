const wrapper = document.querySelector("#element")
const text = document.querySelector("h1")

function small () {
    wrapper.classList.add("smallBorder")
    text.classList.add("smallText")
    wrapper.classList.remove("middleBorder")
    text.classList.remove("middleText")
    wrapper.classList.remove("bigBorder")
    text.classList.remove("bigText")
}
function medium () {
    wrapper.classList.add("middleBorder")
    text.classList.add("middleText")
    wrapper.classList.remove("smallBorder")
    text.classList.remove("smallText")
    wrapper.classList.remove("bigBorder")
    text.classList.remove("bigText")
}
function big () {
    wrapper.classList.add("bigBorder")
    text.classList.add("bigText")
    wrapper.classList.remove("smallBorder")
    text.classList.remove("smallText")
    wrapper.classList.remove("middleBorder")
    text.classList.remove("middleText")
}
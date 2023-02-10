const example = document.querySelectorAll(".example")
const button = document.querySelector("button")


button.addEventListener('click', () => {
    example.forEach((item) => {
        item.classList.toggle("darkBackground")
    })
})
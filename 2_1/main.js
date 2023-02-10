const button = document.querySelector("#navChange")
const home = document.querySelector("#navHome")

let count = 0
button.addEventListener('click', () => {
    count ++
    console.log(count)
    count % 2 === 0 ? home.innerHTML = "emoH" : home.innerHTML = "Home"
    home.classList.toggle("homeStyle")
})
const farbeAuswahlen = document.querySelector("#farbeAuswahlen")
const button = document.querySelector("#button")
const body = document.querySelector("body")

button.addEventListener('click', () => {
    body.style.backgroundColor=`${farbeAuswahlen.value.replaceAll(" ","")}`
})


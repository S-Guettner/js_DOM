const formValues = document.querySelector("#form1")
const button = document.querySelector("#button")

button.addEventListener('click', () => {
    const firstName = document.querySelector("#vorname").value
    const nachname = document.querySelector("#nachname").value
    const land = document.querySelector("#land").value
    console.log(firstName,nachname,land)
})
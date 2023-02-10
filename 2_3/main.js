const navChange = document.querySelector("#navChange")
const navItems = document.getElementsByTagName("a")

const colorArray = [
    "#f6c89f", 
    "#ffe7d1", 
    "#4b8e8d", 
    "#396362"
]

navChange.addEventListener('click', () => {
    for(let i = 0; i < navItems.length; i++){
        navItems[i].style.backgroundColor=colorArray[i]
    }
})
let section = document.querySelector("section")
let div

for (let i = 0; i < 2024; i++) {

    div = document.createElement("div")

    section.appendChild(div)
    
}

let newDiv = document.querySelectorAll("div")

newDiv.addEventListener("mouseover", () => {
    newDiv.style.background = "red"

})
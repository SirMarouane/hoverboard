let color = ["red", "green", "blue", "yellow", "orange", "purple", "cyan", "pink", "brown", "teal", "maroon", "olive", "navy", "violet", "indigo"];

let section = document.querySelector("section")
let div

for (let i = 0; i < 696; i++) {

    div = document.createElement("div")

    section.appendChild(div)
    
}

let newDiv = document.querySelectorAll("div")


newDiv.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.background = color[Math.floor(Math.random()*color.length)]
        element.style.transition = "0s"
       
        
    })

    element.addEventListener("mouseout", () => {
        element.style.background = ""
        element.style.transition = "1.5s"
        square.style.boxShadow = "0 0 2px, 0 0 10px"
    
       
    })
    
});



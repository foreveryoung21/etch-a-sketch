let container = document.querySelector(".container");
container.style.gridTemplateColumns = "repeat(64,1fr)"
container.style.gridTemplateRows = "repeat(64,1fr)"


function createDiv(){
    let div = document.createElement("div");
    div.classList.add("box1");
    return div;
}
for(let i =0; i<64*64;i++){
    let createdDiv= createDiv();
    container.appendChild(createdDiv);
}
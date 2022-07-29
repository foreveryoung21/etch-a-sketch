let container = document.querySelector(".board");
let btn = document.querySelector("#btn");

let column =container.style.gridTemplateColumns = `repeat(${16},1fr)`
let row = container.style.gridTemplateRows = `repeat(${16},1fr)`


function createDiv(){
    let div = document.createElement("div");
    div.classList.add("box1");
    return div;
}

function createGrid(size){
    for(let i =0; i<size*size;i++){
        let createdDiv= createDiv();
        container.appendChild(createdDiv);
    }
}


btn.addEventListener("click",()=>{
    let size = document.querySelector("#grid-size").value;
    let column =container.style.gridTemplateColumns = `repeat(${size},1fr)`
    let row = container.style.gridTemplateRows = `repeat(${size},1fr)`

   createGrid(size);
    
})




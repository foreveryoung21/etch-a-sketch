let board = document.querySelector(".board");
let btn = document.querySelector("#btn");
let box = document.querySelector(".box");
let container = document.querySelector(".container");


let column =board.style.gridTemplateColumns = `repeat(${16},1fr)`
let row = board.style.gridTemplateRows = `repeat(${16},1fr)`


function createDiv(){
    let div = document.createElement("div");
    div.classList.add("box");
    return div;
}

function createGrid(size){
    if(size>100){
       alert("value has to be less than 100");
       return;
    }
    for(let i =0; i<size*size;i++){
        let createdDiv= createDiv();
        board.appendChild(createdDiv);
    }
}



btn.addEventListener("click",(e)=>{
    board.innerHTML = "";
    let size = document.querySelector("#grid-size").value;

    
    let column =board.style.gridTemplateColumns = `repeat(${size},1fr)`
    let row = board.style.gridTemplateRows = `repeat(${size},1fr)`

   createGrid(size);
    
})


container.addEventListener("mouseover",(e)=>{
    if(e.target.classList.contains("box")){
        e.target.classList.add("board-color");
    }
    
})



let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")

let newBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]


let turnX = true;

let count = 0;
boxes.forEach(box =>{
    box.addEventListener('click',()=>{
        if(turnX){
            box.innerText = "x";
            box.style.color = "black";
            turnX = false;
        }else{
            box.innerText = "o";
            box.style.color = "purple"
            turnX = true;
        }
        box.disabled = true;
        count++;
        checkWinner();

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }

    })
})

const gameDraw = ()=>{
    msg.innerText `Match Draw`
    msgContainer.classList.remove("hide")
    disabledBoxes();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
}

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const showWinner = (pos1)=>{
    msg.innerText = `Winner is ${pos1}`
    msgContainer.classList.remove("hide")
    disabledBoxes();
}

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetgame = ()=>{
    turnX = true;
    count = 0;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener('click',resetgame);
newBtn.addEventListener('click',resetgame)


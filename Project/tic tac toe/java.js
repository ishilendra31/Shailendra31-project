let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#resetgame");
let newgame= document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turn0 = true;


const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn0=true
    enablebox();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText='O';
            turn0=false;
        }
        else{
            box.innerText='X'
            turn0=true;
        }
        box.disabled = true;
        checkwinner();
         
    });
});
const disabledbox=()=>{
    for(let boxxx of boxes){
        boxxx.disabled = true;
    }
}
const enablebox=()=>{
    for(let boxxx of boxes){
        boxxx.disabled = false;
        boxxx.innerText="";
    }
}
const showwinner = (winner) => {
    msg.innerText= `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();
}
const checkwinner= () => {
    for (let pattern of winpattern){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
        }
       }
    }
}
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

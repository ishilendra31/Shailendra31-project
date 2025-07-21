let rock = document.querySelector(".hand1");
let paper = document.querySelector(".hand2");
let scissors = document.querySelector(".hand3");
let player= document.querySelector("#scorep1");
let comp=document.querySelector("#scorecomp");
let text = document.querySelector(".text");
let str1="";
let str2="";
let reset = document.querySelector(".reset");

reset.addEventListener("click",() =>{
    player.innerText = "0";
    comp.innerText="0";
    str1="";
    str2="";
    text.innerText="Pick Your Move";
    text.style.backgroundColor = "rgb(0, 0, 35)";
})
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
const game = ['rock', 'paper', 'scissors'];

rock.addEventListener("click",() =>{
    const random = getRandomElement(game);
    if(random === 'paper'){
        str2 += 1;
        str2 = eval(str2);
        comp.innerText = str2;
        text.innerText = "You Lost. Paper Beats Rock";
        text.style.backgroundColor = '#f53527';
    }
    else if(random === 'rock'){
        text.innerText = "It Was Draw";
        text.style.backgroundColor = "rgb(0, 0, 35)";
    }
    else{
    str1 += 1;
    str1 = eval(str1);
    player.innerText = str1;
    text.innerText = "You win...!";
    text.style.backgroundColor = "rgb(0, 0, 35)";
    }
});

paper.addEventListener("click",() =>{
    const random = getRandomElement(game);
    if(random === 'scissors'){
        str2 += 1;
        str2 = eval(str2);
        comp.innerText = str2;
        text.innerText = "You Lost. Scissor Beats Paper";
        text.style.backgroundColor = '#f53527';
    }
    else if(random === 'paper'){
        text.innerText = "It Was Draw";
        text.style.backgroundColor = "rgb(0, 0, 35)";
    }
    else{
    str1 += 1;
    str1 = eval(str1);
    player.innerText = str1;
    text.innerText = "You win...!";
    text.style.backgroundColor = "rgb(0, 0, 35)";
    }
});

scissors.addEventListener("click",() =>{
    const random = getRandomElement(game);
    if(random === 'rock'){
        str2 += 1;
        str2 = eval(str2);
        comp.innerText = str2;
        text.innerText = "You Lost. Rock Beats Scissor";
        text.style.backgroundColor = '#f53527';
    }
    else if(random === 'scissors'){
        text.innerText = "It Was Draw";
        text.style.backgroundColor = "rgb(0, 0, 35)";
    }
    else{
    str1 += 1;
    str1 = eval(str1);
    player.innerText = str1;
    text.innerText = "You win...!";
    text.style.backgroundColor = "rgb(0, 0, 35)";
    }
});

let div=document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id","main")
let main=document.getElementById("main")
main.style = "background-color: pink; height: 500px; width: 800px; display: flex; flex-direction: column; align-items: center; margin-left: 230px";
document.body.setAttribute("style",`background-image: url('background.jpg');  background-size: cover; background-repeat: no-repeat; background-position: center; margin-top: 30px`)

let h1=document.createElement("h1")
h1.innerText="Welcome to Trivia Battle Game"
main.appendChild(h1)

let input1=document.createElement("input")
let input2=document.createElement("input")
main.appendChild(input1)
main.appendChild(input2)
input1.setAttribute("id","input1")
input1.setAttribute("type","text")
input2.setAttribute("id","input2")
input2.setAttribute("type","text")
input1.placeholder="First player name"
input2.placeholder="second player name"
input1.style = "height: 50px; width: 500px; border-radius: 16px; border: 2px solid black; margin-top: 30px";
input2.style = "height: 50px; width: 500px; border-radius: 16px; border: 2px solid black;margin-top: 30px";

let btn=document.createElement("button")
let btnclear=document.createElement("button")
main.appendChild(btn)
main.appendChild(btnclear)
btn.innerText="submit"
btnclear.innerText="Clear names"
btn.style = "height: 30px; width: 100px; border-radius: 16px; border: 2px solid black; margin-top: 10px";
btnclear.style = "height: 30px; width: 100px; border-radius: 16px; border: 2px solid black;margin-top: 10px";

let p1=document.createElement("p")
let p2=document.createElement("p")
main.appendChild(p1)
main.appendChild(p2)
p1.style="font-size:20px"
p2.style="font-size:20px"

btn.addEventListener("click",()=>{
    if(input1.value!="" && input2.value!=""){
        p1.innerText=`Player one name is ${input1.value}`
        p2.innerText=`Player Two name is ${input2.value}`
    }
    else{
        alert("Please enter both playername")
    }
})

btnclear.addEventListener("click",()=>{
    p1.innerText=""
    input1.value=""
    p2.innerText=""
    input2.value=""

})
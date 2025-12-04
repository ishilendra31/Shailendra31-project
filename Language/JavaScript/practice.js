let div=document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id","main")
let main=document.getElementById("main")

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

let btn=document.createElement("button")
let btnclear=document.createElement("button")
main.appendChild(btn)
main.appendChild(btnclear)
btn.innerText="submit"
btnclear.innerText="Clear names"

let p1=document.createElement("p")
let p2=document.createElement("p")
main.appendChild(p1)
main.appendChild(p2)

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
let boxes= document.querySelectorAll(".box");
let display= document.querySelector("#display1");
let clear= document.querySelector("#clear");
let clearelement= document.querySelector("#clearelement");
let equal= document.querySelector("#equal");
let str= "";

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        display.innerText += box.innerText;
        str = str + box.innerText;
    });
});

clear.addEventListener("click",() => {
    display.innerText="";
    str="";
});
clearelement.addEventListener("click",() => {
    if (str.length > 0) {
        str = str.slice(0, -1);
    }
    display.innerText = str;
});

equal.addEventListener("click",() => {
    str= eval(str);
    display.innerText = str;
});

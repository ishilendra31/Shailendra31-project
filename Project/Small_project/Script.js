document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();
    let url=document.getElementById("APIinput").value
    let responseBox = document.getElementById("responseBox");
    if(!url){
        alert("Please paste url")
        return
    }
    async function rep(url) {
        try{
        let response=await fetch(url)
        let data = await response.json()
        responseBox.style.display="block";
        responseBox.textContent = JSON.stringify(data, null, 2);
        }
        catch(error){
            responseBox.style.display = "block"; 
            responseBox.textContent = "Error: " + error.message;
        }
    }
    rep(url);
})
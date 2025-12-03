document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault()
    let url=document.getElementById("APIinput").value
    let responseBox = document.getElementById("responseBox")
    if(!url){
        url = "https://v2.jokeapi.dev/joke/Any"
    }
    async function rep(url) {
        try{
        let response=await fetch(url)
        let data = await response.json()
        responseBox.style.display="block"
        responseBox.textContent = JSON.stringify(data, null, 2)
        }
        catch(error){
            responseBox.style.display = "block"
            responseBox.textContent = error
        }
    }
    rep(url);
})

// let url = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/1GTG6CEN0L1139305?format=json"
// let url1= "https://v2.jokeapi.dev/joke/Any"
// fetch(url)
// .then(response => {
// if (!response.ok) {
//   throw new Error("API is not responding");
// }
//  return (response.json())
// })
// .then(data =>{
// console.log(data.Results[0].Model)
// console.log(data.Results[0].Manufacturer)})  
// .catch(error => console.log(error.message)); 


// async function getCar(url){
//   try{
//     const response= await fetch(url)
//     const data= await response.json()
//     console.log(data.setup)
//     console.log(data.delivery)
//   }
//   catch(error){
//     console.log(error.message)
//   }
// }
// getCar(url1)

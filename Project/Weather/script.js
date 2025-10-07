document.getElementById("submit").addEventListener("submit", function (e) {
    e.preventDefault()
    
    let lat = document.querySelector("#latitude").value
    let lon = document.querySelector("#longitude").value
     if(lat==="" || lon===""){
        lat="26.8467"
        lon="80.9462"
    }
    let url = `https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`;
    let temp=document.querySelector("#temp")
    let humidity=document.querySelector("#humidity")
    let wind_speed=document.querySelector("#wind_speed")

   
async function weather() {
    try {
        const response = await fetch(url, {
            headers: { 'X-Api-Key': 'FDVsZAlfEpzEaTaFOONy/w==h5OSs3TlupuvMxLQ' }
        });
        const data = await response.json();
        temp.textContent = `Temperature : ${data.temp}`
        humidity.textContent = `Humidity :${data.humidity}`
        wind_speed.textContent = `Wind Speed : ${data.wind_speed}`
    } catch (error) {
        console.error('Error fetching weather:', error.message);
    }
}
weather();
})



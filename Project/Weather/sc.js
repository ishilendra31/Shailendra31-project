document.getElementById("search_btn").addEventListener("click", function (e) {
    e.preventDefault()
    
    let city = document.querySelector("#city").value
     if(city===""){
        city="lucknow"
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f4f2071f1b8e6c38b2561db47ae04733`;
    let temp=document.querySelector("#temp")
    let humidity=document.querySelector("#humidity")
    let wind_speed=document.querySelector("#wind_speed")

   
async function weather() {
    try {
        const response = await fetch(url)
        const data = await response.json();
        temp.textContent = `Temperature : ${data.main.temp} °C (${data.weather[0].description})`
        humidity.textContent = `Humidity :${data.main.humidity}%`
        wind_speed.textContent = `Wind Speed : ${data.wind.speed} km/h`
    } catch (error) {
        console.error('Error fetching weather:', error.message);
    }
}
weather();
})



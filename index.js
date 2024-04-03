const key = "7e963330e2fd49cfaed55722240304";
const url = "https://api.weatherapi.com/v1/current.json?key="
const searchBtn = document.querySelector(".searchBtn");
const searchBox = document.querySelector(".searchBox input");
const weatherbox = document.querySelector(".weather");
const weatherimg = document.querySelector(".weather-img");

searchBtn.addEventListener("click",()=>{
    weather(searchBox.value);
})

async function weather(city){
    const response = await fetch(url+`${key}`+`&q=${city}`)
    const data = await response.json();

    if(response.status=== 404 || response.status=== 400){
        console.log("Error");
        document.querySelector(".error").style.display = "block";//Show error on screen.
        document.querySelector(".error h1").style.display = "block";
        document.querySelector(".weather").style.display = "none";//Hides the weather info.
    }
    else{
        console.log(data)
        document.querySelector(".city-name").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°c";
        document.querySelector(".wind").innerHTML = data.current.wind_kph +" km/hr";
        document.querySelector(".humidity").innerHTML = data.current.humidity+"%";
    
        if(data.current.condition.text==="Sunny"){
            weatherimg.src = "images/clear.png"
        }else if(data.current.condition.text==="Partly cloudy"){
            weatherimg.src = "images/clouds.png"
        }else if(data.current.temp_c <= 2){
        }else if(data.current.condition.text==="Light drizzle"){
            weatherimg.src = "images/rain.png"
        }else if(data.current.temp_c <= 2){
            weatherimg.src = "images/snow.png"
        }

        document.querySelector(".weather").style.display = "block";//show weather details.
        document.querySelector(".error").style.display = "none";
        document.querySelector(".error h1").style.display = "none";
    }
}

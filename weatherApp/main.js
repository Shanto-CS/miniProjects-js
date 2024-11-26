const apiKey = "6c5d7d8be64262ce8982cca0e0f80e48";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const srsBtn = document.querySelector(".search button")
const weather_icn = document.querySelector(".weather_icn")
const error = document.querySelector(".error");

let state = "Dhaka";
weatherCheck(state)


async function weatherCheck (city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        // weatherCheck(state);
        error.style.display = "block";
    } else {
        var data = await response.json();

        document.getElementById("temp").innerHTML = Math.round( data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if (data.weather[0].main == "Clouds"){
            weather_icn.src = "images/cloudy_.png";
        }else if (data.weather[0].main == "Rain"){
            weather_icn.src = "images/rain.png";
        }else if (data.weather[0].main == "Clear"){
            weather_icn.src = "images/clear.png";
        }else if (data.weather[0].main == "Drizzle"){
            weather_icn.src = "images/drizzle.png";
        }else if (data.weather[0].main == "Mist"){
            weather_icn.src = "images/haze.png";
        }else if (data.weather[0].main == "Haze"){
            weather_icn.src = "images/haze.png";
        }
        document.querySelector(".weather").style.display  = 'block';
        error.style.display = "none";
    }

   
}


srsBtn.addEventListener("click", ()=>{
    console.log(searchBox.value)
    weatherCheck(searchBox.value)
})

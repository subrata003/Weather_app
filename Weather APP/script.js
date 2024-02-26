const apikey = "ea32c20f9afb9f7af470d42fa24bfda2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?appid=" + apikey + "&units=metric&q=";

const boxsearch = document.querySelector(".search input");

const button = document.querySelector(".search button");

const weathericon=document.querySelector(".weather-icon")

async function checkWeather(city) {
  try {
    const response = await fetch(apiurl + city);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    console.log(data);
    if(data.weather[0].main=="Haze"){
        weathericon.src="images/mist.png"

    }else if(data.weather[0].main=="Clear"){
        weathericon.src="images/clear.png"
    }else if(data.weather[0].main=="Rain"){
        weathericon.src="images/rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        weathericon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png"
    }
    document.querySelector(".weather").style.display="block"
   
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Check the console for details.");
  }
}

button.addEventListener("click", () => {
  checkWeather(boxsearch.value);
});

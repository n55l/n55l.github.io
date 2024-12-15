const weather = document.querySelector("#weather span:first-child");
const temp = document.querySelector("#weather span:nth-of-type(2)");
console.log(temp)
const city = document.querySelector("#weather span:nth-of-type(3)");
const API_KEY = "9d3bdf7100bae4e2b018d4f206b74b8d"


function getWeatherEmoji(weatherMain) {
    const weatherEmojis = {
        "Clear": "☀️",
        "Clouds": "☁️",
        "Rain": "🌧️",
        "Drizzle": "🌦️",
        "Thunderstorm": "⛈️",
        "Snow": "❄️",
        "Mist": "🌫️",
        "Fog": "🌫️",
        "Haze": "🌫️",
        "Smoke": "💨",
        "Dust": "🌪️",
        "Sand": "🏜️",
        "Ash": "🌋",
        "Squall": "🌬️",
        "Tornado": "🌪️"
    };
    return weatherEmojis[weatherMain] || "🌍"; // Default emoji
}



function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          weather.innerText = getWeatherEmoji(data.weather[0].main);
          console.log(data.weather[0].main)
          temp.innerText = `${data.main.temp}°C`
          city.innerText = data.name;
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
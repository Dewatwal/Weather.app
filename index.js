const city = document.querySelector(".search-input");
const btn = document.querySelector(".search-btn");
const weatherEmojis = {
  Thunderstorm: "⛈️",
  Drizzle: "🌧️",
  Rain: "☔",
  Snow: "❄️",
  Mist: "🌫️",
  Smoke: "💨",
  Haze: "🌁",
  Dust: "🏜️",
  Fog: "🌫️",
  Sand: "🏜️",
  Ash: "🌋",
  Squall: "🌬️",
  Tornado: "🌪️",
  Clear: "☀️",
  Clouds: "☁️"
};
const apikey = '3ceb42c9b928f51fbb49487ef14e88b9';
btn.addEventListener("click",()=>{
  const cityInput = city.value.trim();
  const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apikey}&units=metric`);
  response.then(res=>{
    return res.json();
  }).then(data=>{
    console.log(data);
    const now = new Date();
    document.querySelector(".city").innerHTML =`${cityInput}`;
    document.querySelector(".date").innerHTML =`${now.toDateString()}`;
    const weatherType = data.weather[0].main;
    const emoji = weatherEmojis[weatherType];
    document.querySelector(".weather-icon").innerHTML= emoji;
    const temp = data.main.temp;
    document.querySelector(".temp").innerHTML = `${Math.trunc(temp)}`;
    document.querySelector(".description").innerHTML = `${weatherType}`;
    const detail = document.querySelectorAll(".detail-value");   
      detail[0].innerHTML = `${data.main.humidity }%`;
      detail[1].innerHTML = `${data.wind.speed} km/hr`;
      detail[2].innerHTML = `${data.main.pressure} hPa`;
  }).catch(err=>{
    console.log(err);
  })
});


















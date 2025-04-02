const city = document.querySelector(".search-input");
const btn = document.querySelector(".search-btn");

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
    document.querySelector(".description").innerHTML = `${data.weather[0].main}`;
    document.querySelector(".temp").innerHTML = `${data.main.temp}`;
    // document.querySelector(".detail-value").innerHTML = `${};`
    
  }).catch(err=>{
    console.log(err);
  })

});


















function check(){
    let city=document.getElementById("city").value 
    let name=document.getElementById('name')
    let temp=document.getElementById('temp')
    let windspeed=document.getElementById('windspeed')
    let humidity=document.getElementById('humidity')
    let api_key='b210728b2311f348d7ddefa3bc6f0421'

//fetching the weather api using api key
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  name.innerHTML=data.name
  temp.innerHTML=Math.floor(data.main.feels_like-273)+'°C'
  windspeed.innerHTML=data.wind.speed+'km/h'
  humidity.innerHTML=data.main.humidity+'%'

})
}
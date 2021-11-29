var userFormEl = document.querySelector ("#user-form");
var cityNameEl = document.querySelector("#cityname");
var cityEl = document.querySelector("#city");
var currentPicEl = document.querySelector("#current-pic");
var currentTempEl = document.querySelector("#temperature");
var currentHumidityEl = document.querySelector("#humidity");
var currentWindeEl = document.querySelector("#wind-speed");
var currentUVEl = document.querySelector("#UV-index");

var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityname = cityNameEl.value.trim();
if (cityname) {
    getCityWeather(cityname);
    cityNameEl.value = "";
} else {
    alert("Please Enter a City Name");
}
console.log(cityNameEl);

};

var getCityWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=93955d4e5ce50ce6f8bd59561c99f274";

    fetch(apiUrl)
    .then(function(response) {
        if(response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            });
        }else {
            alert("Error:"+ response.statusText);
        }
        return response.value;
    })
    .catch(function(error) {
        alert("unable to connect to OpenWeather");
    });
    
};

function temp(K){
    return Math.floor((K - 273.15)*1.8 +32);
}

//let weatherPic = response.data.weather[0].icon;
//currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/"+weatherPic+"@2x.png");

//currentPicEl.setAttribute("alt",response.data.weather[0].description);
//currentTempEl.innerHTML = "Temperature:"+ temp(data.main.temp) + "&#176F";
//currentHumidityEl.innerHTML = "Humidity:"+main.humidity +"%";
//currentWindeEl.innerHTML = "Wind Speed:" + response.data.wind.speed + "MPH";



userFormEl.addEventListener("submit",formSubmitHandler);
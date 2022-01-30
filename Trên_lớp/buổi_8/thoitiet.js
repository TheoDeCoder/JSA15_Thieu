let url = "http://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh%20City&appid=dca857e6150b7d63058ab56218cb16c1";
let place = document.querySelector(".place")
let temp = document.querySelector(".temp")
let FeelsLike = document.querySelector(".FeelsLike")
let pressure = document.querySelector(".pressure")



fetch(url).then(res => res.json()).then(data => {
    console.log(data);

    place.innerHTML = "Place: " + (data.name);
    temp.innerHTML = "Temperature: " + (data.main.temp/10) + "°C";
    FeelsLike.innerHTML = "Feels Like: " + (data.main.feels_like/10) + "°C";
    pressure.innerHTML = "Pressure: " + (data.main.pressure);


});
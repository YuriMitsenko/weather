let whether_list = [];
let city_id = [703448, 2643743, 5128638];
let units = localStorage.getItem("unit");
if (!units) units = localStorage.setItem("unit", "metric");
let weatherContainer = document.querySelector("#weatherContainer");
let weatherList = new WeatherList(weatherContainer, city_id);
weatherList.showWeather();

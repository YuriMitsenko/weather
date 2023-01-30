let dataService = {
    getCityWeather(city_id) {
        units = localStorage.getItem("unit");
        let url = "http://api.openweathermap.org/data/2.5/weather?id=" + city_id + "&appid=bf35cac91880cb98375230fb443a116f&units=" + units;
        return fetch(url)
            .then(response => response.json())
            .then(json => { console.log(json); return json });
    }
}
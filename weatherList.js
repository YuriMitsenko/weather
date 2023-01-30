class WeatherList {
    constructor(wElem, city_id) {
        console.log(wElem, city_id)
        this.wElem = wElem;
        this.city_id = city_id;
    }

    showWeather() {
        let promissArray = [];

        this.city_id.forEach(city => {

            promissArray.push(dataService.getCityWeather(city));

        });

        Promise.all(promissArray).then(weatherObjects => this.drawList(weatherObjects))
    }

    drawList(weatherObjects) {
        this.wElem.innerHTML = "";

        weatherObjects.forEach((resObject) => {

            new Whe2(resObject).createCityWeather(this.wElem)
            new Whe2(resObject).createMenu();
        })
    }
}
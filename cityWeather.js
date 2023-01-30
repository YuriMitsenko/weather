class Whe2 {
    constructor(weatherInfo) {
        this.weatherInfo = weatherInfo;
    }
    createMenu() {
        let date = this.weatherInfo.dt * 1000
        let dt = new Date(date);
        let month = dt.getMonth() + 1;
        let main = document.querySelector("#main");
        main.classList.add("main");
        main.innerHTML = `<p>${dt.getDate(date) + "." + month + "." + dt.getFullYear() + " " + dt.getHours() + ":" + dt.getMinutes()}</p>`;
    }

    createCityWeather(weatherElement) {
        // let month = this.dt.getMonth() + 1;
        let div = document.createElement("div");
        div.classList.add("whether");
        let unitSign;


        let date = this.weatherInfo.dt * 1000;
        let dt = new Date(date);
        let month = dt.getMonth() + 1;

        let sunrise = this.weatherInfo.sys.sunrise * 1000;
        let dtSunrise = new Date(sunrise);
        console.log(this.weatherInfo.sys.sunrise)

        let sunset = this.weatherInfo.sys.sunset * 1000;
        let dtSunset = new Date(sunset);
        console.log(this.weatherInfo.wind.deg)

       
        if (units == "metric") {
            unitSign = "C"
        }
        else if (units == "imperial") {
            unitSign = "F"
        }

        div.innerHTML += `<div id = "first${this.weatherInfo.id}"><strong>${this.weatherInfo.name}</div><br> `;
        div.innerHTML += `<div><b>data time</b><br>${dt.getDate(date) + "." + month + "." + dt.getFullYear() + " " + dt.getHours() + ":" + dt.getMinutes()}</p>`;
        div.innerHTML += `<div><b>temp</b><br> ${(this.weatherInfo.main.temp).toFixed(1) + "&deg;" + unitSign}</p>`;
        div.innerHTML += `<div><b>min_temp</b><br> ${(this.weatherInfo.main.temp_min).toFixed(1) + "&deg;" + unitSign}</p>`;
        div.innerHTML += `<div><b>max_temp</b><br> ${(this.weatherInfo.main.temp_max).toFixed(1) + "&deg;" + unitSign}</p>`;
        div.innerHTML += `<div><b>sunrise</b><br> ${dtSunrise.getHours() + ":" + dtSunrise.getHours()}</p>`;
        div.innerHTML += `<div><b>sunset</b><br> ${dtSunset.getHours() + ":" + dtSunset.getHours()}</p>`;
        div.innerHTML += `<div><b>description</b><br>${this.weatherInfo.weather[0].description}</p>`;
        div.innerHTML += `<div><b>pressure</b><br>${this.weatherInfo.main.pressure + " hPa"}</p>`;
        div.innerHTML += `<img src="http://openweathermap.org/img/wn/${this.weatherInfo.weather[0].icon}@2x.png"/>`;
        div.innerHTML += `<div><b>wind_speed</b><br>${this.weatherInfo.wind.speed} + m/sec</p>`;
        div.innerHTML += `<img width = 30 id = "arrow${this.weatherInfo.id}" src=img/arrow.png /img>`;

        weatherContainer.append(div)
        document.getElementById(`arrow${this.weatherInfo.id}`).style.transform = `rotate(${(this.weatherInfo.wind.deg)}deg)`;
        // document.getElementById(`first${this.weatherInfo.id}`).style.;
    }
}

document.querySelector("button").addEventListener("click", function () {
    if (units == "metric") {
        units = localStorage.setItem("unit", "imperial");
    } else {
        units = localStorage.setItem("unit", "metric");
    }
    weatherList.showWeather();
});
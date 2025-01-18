let timeElement = document.getElementById('time-value');
let tempElement = document.getElementById('temp-value');
let weatherElement = document.getElementById('weather-value');
let weatherIcon = document.getElementById('weather-icon');

console.log(weatherIcon);
fetch("https://api.sunrisesunset.io/json?lat=1.3106&lng=103.866")
.then((response) => response.json())
.then((body) => {
    console.log(body);
    const time = body['results']['sunset'];
    let endTime = time[0] + time[1] + time[2] + time[3];
    console.log(endTime);
    timeElement.innerHTML = endTime + "PM";

});

fetch("https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast")
.then((response) => response.json())
.then((body) => {
    console.log(body);
    let lowTemp = body['data']['records'][0]['general']['temperature']['low'];
    let highTemp = body['data']['records'][0]['general']['temperature']['high'];
    let weather = body['data']['records'][0]['general']['forecast']['text'];
    if(weather.includes("Fair")) {
        weatherIcon.innerHTML = '☀️';
    }
    else if (weather.includes("Cloudy")) {
        weatherIcon.innerHTML = '☁️';
    }
    else if (weather.includes("Rain") || weather.includes("Showers")) {
        weatherIcon.innerHTML = '🌧️';
    }
    else if (weather == "Fog" || weather == "Mist" || weather == "Windy" || weather == "Slightly Hazy" || weather == "Hazy") {
        weatherIcon.innerHTML = '🌫️';
    }
    else {
        weatherIcon.innerHTML = '🌤️';
    }

    let average = (lowTemp + highTemp) / 2;
    tempElement.innerHTML = average + "°C";
    weatherElement.innerHTML = weather;
});


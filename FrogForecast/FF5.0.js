//** Feature 1: Date and Time */

function dateAndTime() { 
    
  let now = new Date();

  let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

  let day = days[(now.getDay())]

  let hour = now.getHours();

  if (hour < 10) {
      hour = `0${hour}`;
  }

  let minute = now.getMinutes();

  if (minute < 10) {
      minute = `0${minute}`;
  }

  let formattedTime = `${day} ${hour}:${minute}`

  return(`${formattedTime}`);

};

let frogTime = document.querySelector("#currentDay");

frogTime.innerHTML = dateAndTime();

//** Feature 2: Search Engine */

function showLocation(event) {
    event.preventDefault();
    
    let lilypadLocation = document.querySelector("#currentLocation");
    let locationUserInput = document.querySelector("#locationInput");
    lilypadLocation.innerHTML = locationUserInput.value;

    let apiKey = "3fdbb0c1f67069bd33e76ea8a1295d83";
    let cityName = locationUserInput.value.toLowerCase();
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemp);
};

function showTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    let displayTemp = document.querySelector("#theTemperature");
    displayTemp.innerHTML = temperature;
    let weatherDescription = document.querySelector("#weatherDescription");
    weatherDescription.innerHTML = response.data.weather[0].main;
}

let locationInputForm = document.querySelector("#submitLocation");
locationInputForm.addEventListener("submit", showLocation);

//** Feature 3: Geolocation */

function geolocate(event) {

    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getWeather);

};

function getWeather(position) {

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "3fdbb0c1f67069bd33e76ea8a1295d83";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    
    axios.get(apiUrl).then(locateAndShowWeather);

};

function locateAndShowWeather(response) {
    
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    let displayTemp = document.querySelector("#theTemperature");
    displayTemp.innerHTML = temperature;
    let lilypadLocation = document.querySelector("#currentLocation");
    lilypadLocation.innerHTML = city;
};

let locateUser = document.querySelector("#locateMe");
locateUser.addEventListener("click", geolocate);





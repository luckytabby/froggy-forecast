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

//** Feature 2: Search Engine; form is called #submitLocation*/

function showLocation(event) {
    event.preventDefault();
    let lilypadLocation = document.querySelector("#currentLocation");
    let locationUserInput = document.querySelector("#locationInput");
    lilypadLocation.innerHTML = locationUserInput.value;

  let temp = Math.round(response.data.main.temp);
  let tempDisplay = document.querySelector("#theTemperature")
 
 tempDisplay.innerHTML = `It is ${temp} degrees outside!`
}

let locationInputForm = document.querySelector("#submitLocation");
locationInputForm.addEventListener("submit", showLocation);
 
function showPosition(position) {
 let lat = position.coords.latitude;
 let lon = position.coords.longitude;
 let apiKey = "3fdbb0c1f67069bd33e76ea8a1295d83";
 let units = "metric";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
 
 axios.get(apiUrl).then(showTemp);
};

function getPosition(event) {
 
navigator.geolocation.getCurrentPosition(showPosition);

};




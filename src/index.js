// feature #1
let now = new Date();
let currently = document.querySelector("#updated");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decamber"
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
currently.innerHTML = `${day}, ${month} ${date}, ${year},  ${hours}:${minutes}`;

// Showing conditions
function showWeather(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-desc").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
//url
function searchCity(city) {
  let apiKey = "8cfa4dd3ccafa97ae01716474ab8d486";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
//city-input
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
//location
function getLocation(position) {
  let apiKey = "8cfa4dd3ccafa97ae01716474ab8d486";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

//current location
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}
//listen to the city
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

//listen to current location
let currentLocationButton = document.querySelector("#current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Omaha");

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (14*9)/5+32;
  alert(fahrenheitTemperature);
}

let fahrenheitLink = document.querySelector("#fahremheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
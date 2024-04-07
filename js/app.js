const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");
const seeWeather = document.getElementById("see-weather");

changeLocation.city.focus();

// Loader

function loader(state) {
  if (state) {
    overlay.classList.remove("d-none");
  } else {
    overlay.classList.add("d-none");
  }
}

// updateData
const updateData = (weather) => {
  console.log(weather);
  details.innerHTML = `
    <div id="details" class="text-uppercase">
    <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
    <p class="mb-3">${weather.weather[0].main}</p>
    <div class="display-4 mb-3">
      <span>${Math.round(weather.main.temp)}</span>
      <span>&deg;C</span>
    </div>
  </div>

`;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};

// getWeather
const getWeather = async (city) => {
  const data = await getDataWether(city);
  return data;
};

// get location
seeWeather.addEventListener("click", () => {
  const cityName = changeLocation.city.value.trim();
  getWeather(cityName).then((data) => updateData(data));
  changeLocation.reset();
});

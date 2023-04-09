let weather = {
  apiKey: "7d80d1e9b8104b80d9af2838194f32b6",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city +
      "&units=imperial&appid="
      + this.apiKey
    ).then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp } = data.main;
    const { country } = data.sys;
    console.log(name, icon, description, temp, country)
    document.querySelector(".city").innerText = name + ", " + country;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".content").innerText = description.toUpperCase();
    document.querySelector(".temp").innerText = temp + " °F";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
}

document.querySelector(".search-button")
  .addEventListener("click", () => {
    weather.search();
  })

document.querySelector(".search-bar").addEventListener("keyup",
  function(event) {
    if (event.key == "Enter") {
      weather.search();
    }
  }
);


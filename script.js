document.addEventListener('DOMContentLoaded', () => {
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const cityInput = document.getElementById('city-input');
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const weatherDescription = document.getElementById('weather-description');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('wind-speed');

  getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
      fetchWeatherData(city);
    }
  });

  async function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.cod === 200) {
        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      } else {
        alert('City not found. Please try again.');
      }
    } catch (error) {
      alert('Error fetching data. Please try again later.');
    }
  }
});

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = '540f6d67e77644288252cd7c279f47a8';
    const city = 'Uppsala';
    const country = 'SE'; // Country code for Sweden

    const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setWeatherData(response.data.data[0]);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather in Uppsala, Sweden</h2>
      <p>Temperature: {weatherData.temp}°C</p>
      <p>Weather: {weatherData.weather.description}</p>
      {/* Add more weather information as needed */}
    </div>
  );
};

export default WeatherComponent;

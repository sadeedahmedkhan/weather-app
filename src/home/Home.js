import React, { useState, useMemo } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import WeatherComponent from './../components/WeatherComponent';
import styles from './Home.module.css';
import { CODES } from '../constants/WeatherCodes';

const Home = () => {
  const [search, setSearch] = useState('');
  const [weatherResults, setWeatherResults] = useState(null);
  const [error, setError] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClearState = () => {
    setSearch('');
    setError('');
    setWeatherResults(null);
  };

  const handlePressEnter = async (e) => {
    if (
      e.key === 'Enter' &&
      e.target.value.length > 1 &&
      e.target.value !== ' '
    ) {
      const request = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=1&language=en&format=json`
      );

      if (!request.data?.results) {
        console.log('error catched after location api request: ', request);
        setError('⚠ Invalid Location, Please try again!');
        return;
      }

      const { latitude, longitude, timezone } = request.data.results[0];
      const weatherRequest = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=6&daily=temperature_2m_max,weathercode,windspeed_10m_max&timezone=${timezone}`
      );
      if (!weatherRequest.data.error) {
        setWeatherResults(weatherRequest.data);
      } else {
        setError('⚠ Something went wrong, please refresh or try again!');
        console.log(
          'error catched after weather api request: ',
          weatherRequest.data.reason
        );
      }
    }
  };

  const formatWeatherData = useMemo(() => {
    let weatherData = [];
    if (weatherResults !== null) {
      for (let i = 1; i < 6; i++) {
        weatherData.push({
          date: weatherResults.daily.time[i],
          temperature: weatherResults.daily.temperature_2m_max[i],
          windSpeed: weatherResults.daily.windspeed_10m_max[i],
          description: CODES.get(weatherResults.daily.weathercode[i]),
        });
      }
    }
    return weatherData;
  }, [weatherResults]);

  return (
    <div>
      <Header />
      <div className={styles.search_container}>
        <input
          autoFocus
          onFocus={handleClearState}
          onClick={handleClearState}
          className={styles.search_input}
          value={search}
          onChange={handleSearchChange}
          placeholder='Enter a location...'
          onKeyDown={handlePressEnter}
        />
      </div>
      <section className={styles.weather_section}>
        {weatherResults && error === ''
          ? formatWeatherData.map((data) => (
              <WeatherComponent
                key={data.date}
                date={data.date}
                temperature={data.temperature}
                windSpeed={data.windSpeed}
                description={data.description}
              />
            ))
          : error}
      </section>
    </div>
  );
};

export default Home;

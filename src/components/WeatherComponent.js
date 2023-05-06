import React, { memo } from 'react';
import styles from './Weather.module.css';

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const WeatherComponent = (props) => {
  const { date, temperature, windSpeed, description } = props;

  return (
    <section className={styles.main_container}>
      <h3>{DAYS[new Date(date).getDay()]}</h3>
      <p>{date}</p>
      <div className={styles.image}>image</div>
      <p>{description}</p>
      <p>Temperature (C): {temperature}</p>
      <p>Wind (Km/h): {windSpeed}</p>
    </section>
  );
};

export default WeatherComponent;

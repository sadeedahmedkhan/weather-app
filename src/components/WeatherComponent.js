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

const WeatherComponent = memo((props) => {
  const { date, temperature, windSpeed, description, image } = props;

  return (
    <section className={styles.main_container}>
      <h3>{DAYS[new Date(date).getDay()]}</h3>
      <p>{date}</p>
      <img
        className={styles.image}
        src={require(`../assets/${image}`)}
        alt='weather description'
      />
      <p>{description}</p>
      <p>
        <strong>Temperature (C):</strong> {temperature} °C
      </p>
      <p>
        <strong>Wind (Km/h):</strong> {windSpeed}
      </p>
    </section>
  );
});

export default WeatherComponent;

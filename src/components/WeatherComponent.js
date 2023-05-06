import React from 'react';
import styles from './Weather.module.css';

const WeatherComponent = () => {
  return (
    <section className={styles.main_container}>
      <h3>Day</h3>
      <p>Date</p>
      <div>image</div>
      <p>Description</p>
      <p>Temperature (C): </p>
      <p>Wind (Km/h):</p>
    </section>
  );
};

export default WeatherComponent;

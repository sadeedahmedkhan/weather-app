import React from 'react';
import Header from '../header/Header';
import WeatherComponent from './../components/WeatherComponent';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.search_container}>
        <input className={styles.search_input} placeholder='Search here...' />
      </div>
      <section className={styles.weather_section}>
        <WeatherComponent />
      </section>
    </div>
  );
};

export default Home;

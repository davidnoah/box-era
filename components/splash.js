import React from 'react';

import Header from './header/header';
import SplashVideo from './splashVideo';
import TourDates from './tourDates';

const Splash = () => (
  <div className="splash-wrapper">
    <Header />
    <SplashVideo />
    <TourDates />
  </div>
);

export default Splash;

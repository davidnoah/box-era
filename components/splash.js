import React from 'react';

import Header from './header/header';
import SplashVideo from './splashVideo';
import TourDates from './tourDates';
import LavaLampIndex from './header/lavaLampIndex';
import HeaderImage from './header/headerImage';

const Splash = () => (
  <div className="splash-wrapper">
    <div className="header-lava">
      <Header />
      <LavaLampIndex />
    </div>
    <SplashVideo />
    <TourDates />
  </div>
);

export default Splash;

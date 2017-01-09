import React from 'react';

import HeaderImage from './header/headerImage';
import TourDates from './tourDates';
import LavaLampIndex from './header/lavaLampIndex.js';

const Splash = () => (
  <div className="splash-wrapper">
    <HeaderImage />
    <LavaLampIndex />
    <TourDates />
  </div>
);

export default Splash;

import React from 'react';
import runLamp from '../../lavaLamp.js';

export default class LavaLampIndex extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    runLamp();
  }

  render() {
    return (
      <div className="lava-lamp-wrapper">
        <canvas id="bubble"></canvas>
        <div className="navigation-wrapper">
          <div className="lava-text">Biography</div>
          <div className="lava-text">Tour Dates</div>
          <div className="lava-text">Photos</div>
          <div className="lava-text">Contact</div>
        </div>
      </div>
    );
  }
}

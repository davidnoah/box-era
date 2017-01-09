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
        <div className="wrap">
          <canvas id="bubble"></canvas>
          <span className="text"></span>
        </div>
      </div>
    );
  }
}

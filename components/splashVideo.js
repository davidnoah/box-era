import React from 'react';

import classnames from 'classnames';

// https://www.npmjs.com/package/react-youtube
import YouTube from 'react-youtube';

const VideoColumn = ({ className }) => (
  <div className={classnames("video-column", className)}>
    <img src={'./images/patterns/pattern-line-circle.png'} style={{ height: '90px' }} />
    <img src={'./images/patterns/pattern-two-full-circles.png'} />
    <img src={'./images/patterns/pattern-double-helix.png'} style={{ height: '100px' }}/>
    <img src={'./images/patterns/pattern-horizontal-line-squiggly.png'}  />
  </div>
);

export default class SplashVideo extends React.Component {
  constructor () {
    super();
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render () {
    const opts = {
      height: '300',
      width: '500',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <div className="splash-video-row">
        <div className="splash-video-wrapper">
          <YouTube
            videoId="eVW1qOmTG4I"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      </div>
    );
  }
}

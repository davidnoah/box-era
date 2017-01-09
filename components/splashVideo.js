import React from 'react';

// https://www.npmjs.com/package/react-youtube
import YouTube from 'react-youtube';
// <YouTube
//   videoId="eVW1qOmTG4I"
//   opts={opts}
//   onReady={this._onReady}
// />

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
      width: '460',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <div className="splash-video-wrapper">
        <YouTube
          videoId="eVW1qOmTG4I"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}

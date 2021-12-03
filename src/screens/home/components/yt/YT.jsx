import React from 'react';
import YouTube from 'react-youtube';
import './YT.css';

class Youtube extends React.Component {
  render() {
    const opts = {
      height: '534',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YouTube 
        videoId="NwdQx2P_ytk" 
        opts={opts} 
        onReady={this._onReady} 
        containerClassName='yt_cont'
        id='yt_id'
      />        
    )}

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube;
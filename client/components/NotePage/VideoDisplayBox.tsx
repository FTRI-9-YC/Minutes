import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface stateChangeProps {
    handleInputChange: (val: string) => void,
    youtubeId: string,
    onPlayerReady: (val: object) => void,
    onPlayerStateChange: (val: object) => void,
    linkInputted: boolean
}

export default function VideoDisplayBox ({ youtubeId, handleInputChange, onPlayerReady, onPlayerStateChange, linkInputted }: stateChangeProps){
   
    // config for youtube player
    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
      // one equals autoplay off. 0 will have the video play automatically 
            autoplay: 0,
        },
    };

    return (
        <div>
            {linkInputted === false ? <input type="text" onChange={(e) => handleInputChange(e.target.value)} required placeholder="URL..." /> : <YouTube videoId={youtubeId} opts={opts} onReady={onPlayerReady} onStateChange={onPlayerStateChange} />}
        </div>
    )
}

// resources for youtube embed:
// https://developers.google.com/youtube/iframe_api_reference#Events
//https://www.youtube.com/watch?v=ckiaNqOrG5U&ab_channel=CodingShiksha
// https://www.freecodecamp.org/news/use-the-youtube-iframe-api-in-react/
    // look into methods - .getDuration() and .getCurrenttime()

// take a look at player parameters - playerVars

/* Notes:
-Player object, you do not need to specify values for the width and height, 
which are specified as attributes of the <iframe> tag, 
or the videoId and player parameters, 
which are are specified in the src URL - also check out loading a video
player section for security measures - add origin parameter and domain of your hostname
as security measures
*/
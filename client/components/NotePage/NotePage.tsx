import React, { useState } from 'react';
import VideoSection from './VideoSection';
import SideBar from './SideBar';
import NavBar from '../Global/NavBar';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

export default function NotePage (){
    const [target, setTarget] = useState({});
    // any time there is a change in state (press play/pause), current time is aquired
    const onPlayerStateChange: YouTubeProps['onStateChange'] = (e: YouTubeEvent<number>) => {
        console.log(e);
        console.log(e.target.getCurrentTime());
    }

    // once video loads, function fires and video is automatically paused for user to press play
    const onPlayerReady: YouTubeProps['onReady'] = (e) => {
        // set target state to player obj (use for pause button)
        setTarget(e.target);
        // access to player in all event handlers via event.target
        e.target.pauseVideo();
    }

    // const handleNoteButtonPause = (event) => {

    // }

    return (
        <div>
            <NavBar />
            <VideoSection onPlayerReady={onPlayerReady} onPlayerStateChange={onPlayerStateChange} />
            <SideBar />
            </div>
    )
}
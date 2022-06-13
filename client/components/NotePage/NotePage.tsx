import React, { useEffect, useState } from 'react';
import VideoSection from './VideoSection';
import SideBar from './SideBar';
import NavBar from '../Global/NavBar';
import YouTube, { YouTubePlayer, YouTubeEvent, YouTubeProps } from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

export default function NotePage (){
    // State for testing - can delete if needed
    const [videoObject, setVideoObject] = useState<YouTubePlayer>();
    const [timeStamp, setTimeStamp] = useState();
    const [url, setUrl] = useState();
    const[id, setId] = useState('');

    useEffect(() => {
        // fetch data from database
    })

    // any time there is a change in state (press play/pause), current time is aquired
    const onPlayerStateChange: YouTubeProps['onStateChange'] = (e: YouTubeEvent<number>) => {
        console.log(e);
        console.log(e.target.getCurrentTime());
    }

    // once video loads, function fires and video is automatically paused for user to press play
    const onPlayerReady: YouTubeProps['onReady'] = (e) => {
        // set target state to player obj (use for pause button)
        setVideoObject(e.target);
        e.target.pauseVideo();
    }

    const handleInputChange = (val: string) => {
        setId(getYouTubeID(val));
    }

    // handles note button pause, sets time stamp in state
    const handleNoteButtonPause = () => {
        if (!videoObject) return console.error('Target does not exist');
        videoObject.pauseVideo();
        setTimeStamp(videoObject.getCurrentTime());
    }

    return (
        <div>
            <NavBar />
            <VideoSection onPlayerReady={onPlayerReady} onPlayerStateChange={onPlayerStateChange} handleInputChange={ handleInputChange } id={id} />
            <SideBar handleNoteButtonPause={handleNoteButtonPause} />
            </div>
    )
}
import React, { ChangeEvent, useEffect, useState } from 'react';
import NotesSummary from './NotesSummary';
import VideoDisplayBox from './VideoDisplayBox';
import getYouTubeID from 'get-youtube-id';

interface stateChangeProps {
    onPlayerReady: (val: object) => void,
    onPlayerStateChange: (val: object) => void
}

export default function VideoSection ({ onPlayerReady, onPlayerStateChange }: stateChangeProps){
    // state for timestamp
    const [timeStamp, setTimeStamp] = useState('');
    const[id, setId] = useState('');
    
    const handleInputChange = (val: string) => {
        setId(getYouTubeID(val));
    }

    return (
        <section>
            <NotesSummary />
            <VideoDisplayBox id={id} handleInputChange={handleInputChange} onPlayerReady={onPlayerReady} onPlayerStateChange={onPlayerStateChange} />
        </section>
    )
}
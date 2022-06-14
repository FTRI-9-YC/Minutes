import React, { ChangeEvent, useEffect, useState } from 'react';
import NotesSummary from './NotesSummary';
import VideoDisplayBox from './VideoDisplayBox';

interface stateChangeProps {
    onPlayerReady: (val: object) => void,
    onPlayerStateChange: (val: object) => void,
    handleInputChange: (val: string) => void,
    id: string,
    linkInputted: boolean
    noteSummary: Array<any>
}

export default function VideoSection ({ onPlayerReady, onPlayerStateChange, handleInputChange, id, linkInputted, noteSummary }: stateChangeProps){
    
    return (
        <section className='videosection'>
            <NotesSummary noteSummary={noteSummary} />
            <VideoDisplayBox id={id} handleInputChange={handleInputChange} onPlayerReady={onPlayerReady} onPlayerStateChange={onPlayerStateChange} linkInputted={linkInputted} />
        </section>
    )
}
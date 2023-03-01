import React, { useState } from "react";
import YouTube, { YouTubeProps } from 'react-youtube';
import { Link } from 'react-router-dom';

interface playerProp {
  autoplay: number
}

interface optsProps {
  height: string,
  width: string,
  playerVars: playerProp
}

interface props {
  key: number,
  videoId: string,
  opts: optsProps,
  // onPlayerReady: (val: object) => void
}

// export default function Video ({ ex }: props ){
  export default function Video ( { key, videoId, opts}: props ){
  // export default function Note ({ title, content, _id, deleteNoteHandler }: stateChangeProps){
//   const [hideContent, setHideContent] = useState(true);

  return (
    <section className="individualVideo">
      {/* <div className="preview" onClick={() => setHideContent(prev => !prev)}> */}
        {/* <p>{title} <span className="time">{time}</span></p>
      </div>
      {!hideContent && <div className="content">
        <p>Content: {content}</p>
        <button onClick={() => deleteNoteHandler(_id)}>Delete</button>
      </div>} */}
      <div>
       <p>title: {videoId}</p>
          <YouTube 
            key={key}
            videoId={videoId} 
            opts={opts}
            // onReady={onPlayerReady} 
          />
        <Link to={`/custom/${videoId}`}>
        <button>View Notes</button>
        </Link>
      </div>
    </section>
  )
}
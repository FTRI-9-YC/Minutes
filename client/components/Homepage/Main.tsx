import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import notesController from '../../../server/controllers/notesController';
import NavBar from "../Global/NavBar";
import Video from "./Video";
import YouTube, { YouTubeProps } from 'react-youtube';
import Iframe from 'react-iframe'

interface videoSummaryProps {
  videoSummary: Record<number, object[]>
  // videoSummary: Array<{title: string, dbId: number}>,
  videoSummaryHandler: (val: Array<object>) => void,
  id: string,
  onPlayerReady: (val: object) => void,
  onPlayerStateChange: (val: object) => void,
}
// interface IframeHTMLAttributes<T> {
//   allow?: string;
//   allowFullScreen?: boolean;
//   allowTransparency?: boolean;
//   frameBorder?: number | string;
//   height?: number | string;
//   marginHeight?: number;
//   marginWidth?: number;
//   name?: string;
//   sandbox?: string;
//   scrolling?: string;
//   seamless?: boolean;
//   src?: string;
//   srcDoc?: string;
//   width?: number | string;
// }

const main = ({videoSummary, videoSummaryHandler, id, onPlayerReady, onPlayerStateChange }: videoSummaryProps) => {

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
  // one equals autoplay off. 0 will have the video play automatically 
        autoplay: 0,
    },
};

  console.log('videoSummary in Main..', Object.keys(videoSummary))
  // console.log('videoSummary:', videoSummary)
  // videoSummary.forEach(video => { console.log(Object.keys(video))})
  // console.log(videoSummary.length)
  // console.log(videoSummary[0].title);
  
// HIGHLIGHT AND USE COMMAND K AND COMMAND I
  // const videos: JSX.Element[] = [];
  // for (let i = 0; i < Object.keys(videoSummary).length; i++){
  //   videos.push(
  //     <Video 
  //       key={i}
  //       opts={opts}
  //       ex={i}
  //     />
  //   )
  // }
  const videos = Object.keys(videoSummary).map((id, i) => {
    return <YouTube 
        key={i}
        videoId={id} 
        opts={opts}
        id={id}
        onReady={onPlayerReady} 
        
      />
})
  //   return 
  //       <div>
  //       <Iframe url="https://www.youtube.com/embed/{id}"
  //        width="590" height="315" src="https://www.youtube.com/embed/{id}" />
  //       </div>
  
  // })


  // utility types: 
  // const ids: Record<number, string> = {
  //    10: "a",
  //    20: "b"
  //}
  // ids[30] = "c"

    return (
      <>
        <NavBar />

        <section>
          <Link to="/custom">
            <button>New Video</button>
          </Link>
        
          <header>
            <h2>My Videos</h2>
          </header>
          <div>
       
            {/* {Object.keys(videoSummary).map((id) => {
              return (
                <div>
                  <iframe 
          width="590" height="315" src="https://www.youtube.com/embed/{id}" />
                </div>
              )
            })} */}

          {videos}
          </div>
        
        </section>
        


        </>
    )
}

export default main;
// list out videos (research iframe/youtube api)
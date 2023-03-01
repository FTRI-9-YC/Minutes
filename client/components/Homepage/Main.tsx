import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../Global/NavBar";
import Video from "./Video";
import YouTube, { YouTubeProps } from 'react-youtube';
import Iframe from 'react-iframe'

// interface videoSummaryProps {
//   videoSummary: Record<number, object[]>
//   // videoSummary: Array<{title: string, dbId: number}>,
//   videoSummaryHandler: (val: Array<object>) => void,
//   videoId: string,
//   onPlayerReady: (val: object) => void,
//   onPlayerStateChange: (val: object) => void,
// }


// const main = ({videoSummary, videoSummaryHandler, videoId, onPlayerReady, onPlayerStateChange }: videoSummaryProps) => {

//   const opts: YouTubeProps['opts'] = {
//     height: '390',
//     width: '640',
//     playerVars: {
//   // one equals autoplay off. 0 will have the video play automatically 
//         autoplay: 0,
//     },
// };

//   console.log('videoSummary in Main..', Object.keys(videoSummary))

//   const videos = Object.keys(videoSummary).map((id, i) => {
//     return <Video 
//             key = {i}
//             videoId={id}
//             opts={opts}
//             onPlayerReady={onPlayerReady}
//             />
// })


  // utility types: 
  // const ids: Record<number, string> = {
  //    10: "a",
  //    20: "b"
  //}
  // ids[30] = "c"

    // return (
      <>
        {/* <NavBar /> */}

        {/* <section>
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

          {/* {videos}
          </div>
        
        </section> */}
        


        </>
//     )
// } */}

// export default main;
// list out videos (research iframe/youtube api)
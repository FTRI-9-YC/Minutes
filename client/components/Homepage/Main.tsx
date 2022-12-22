import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import notesController from '../../../server/controllers/notesController';
import NavBar from "../Global/NavBar";
import Video from "./Video"

interface videoSummaryProps {
  videoSummary: Record<number, object[]>
  // videoSummary: Array<{title: string, dbId: number}>,
  videoSummaryHandler: (val: Array<object>) => void,
  
}
interface exProps {

}

const main = ({videoSummary, videoSummaryHandler }: videoSummaryProps) => {
  console.log('videoSummary in Main..', videoSummary)
  // console.log('videoSummary:', videoSummary)
  // videoSummary.forEach(video => { console.log(Object.keys(video))})
  // console.log(videoSummary.length)
  // console.log(videoSummary[0].title);
  
// HIGHLIGHT AND USE COMMAND K AND COMMAND I
  const videos: JSX.Element[] = [];
  for (let i = 0; i < Object.keys(videoSummary).length; i++){
    videos.push(
      <Video 
        key={i}
        ex={i}
      />
    )
  }
  // const videos = videoSummary.map((video, i) => {
  //   // return <Video 
  //   //     key={i}
  //   //     title={video.title}
  //   //     // content={video.content}
  //   //     // youtubeLink={video.youtubeLink}
  //   //     dbId={video.dbId}
  //   //   />
  
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
       
        

          {videos}
          </div>
        
        </section>
        


        </>
    )
}

export default main;
// list out videos (research iframe/youtube api)
import React, { useEffect, useState } from "react";
import VideoSection from "./VideoSection";
import SideBar from "./SideBar";
import NavBar from "../Global/NavBar";
import YouTube, {
  YouTubePlayer,
  YouTubeEvent,
  YouTubeProps,
} from "react-youtube";
import getYouTubeID from "get-youtube-id";

interface NotePageProps {
  // youtubeLink: string,
  // id: string,
  // linkInputted: boolean,
  // noteSummary: Array<object>,
  // handleNoteSummary: (val: Array<object>) => void
  // videoSummary: Record<number, object[]>,
  videoSummaryHandler: (val: Array<object>) => void,
  // deleteNoteHandler: (val: number) => any,
  // handleInputChange: (val: string) => void,
  // onPlayerReady: (val: object) => void,
  // onPlayerStateChange: (val: object) => void,
  // handleNoteInput: (val: string) => void,
  // time: string,
  // content: string,
  // title: string,
  // handleTitle: (val: string) => void,
}

export default function NotePage( { videoSummaryHandler} : NotePageProps) {
  // State for testing - can delete if needed
  // const [videoObject, setVideoObject] = useState<YouTubePlayer>();
  // const [time, setTime] = useState("");
  // // const [youtubeLink, setYoutubeLink] = useState("");
  // // const [id, setId] = useState("");
  // const [content, setContent] = useState("");
  // // const [linkInputted, setLinkInputted] = useState(false);
  // const [title, setTitle] = useState("");
  // const [noteSummary, setNoteSummary] = useState([]);
//  console.log('youtube-video-id:', id)

// const [videoSummary, setVideoSummary] = useState({});
// const [videoNums, setVideoNums] = useState([]) // state to store video # as an array ex: [1, 2, 3, 4]
const [time, setTime] = useState("");
const [content, setContent] = useState("");
const [title, setTitle] = useState("");
const [videoObject, setVideoObject] = useState<YouTubePlayer>();
const [youtubeLink, setYoutubeLink] = useState("");
const [youtubeId, setYoutubeId] = useState("");
const [linkInputted, setLinkInputted] = useState(false);
const [noteSummary, setNoteSummary] = useState([]);

  useEffect(() => {
    // fetch data from database
  });

  // // any time there is a change in state (press play/pause), current time is aquired
  // const onPlayerStateChange: YouTubeProps["onStateChange"] = (
  //   e: YouTubeEvent<number>
  // ) => {
  //   console.log('e:', e);
  // };

  // // once video loads, function fires and video is automatically paused for user to press play
  // const onPlayerReady: YouTubeProps["onReady"] = (e) => {
  //   // set target state to player obj (use for pause button)
  //   console.log('onplayerready')
  //   console.log('e.target:', e.target)
  //   setVideoObject(e.target);
  //   e.target.pauseVideo();
  // };
  const onPlayerStateChange: YouTubeProps["onStateChange"] = (
    e: YouTubeEvent<number>
  ) => {
    console.log('e:', e);
  };

  // once video loads, function fires and video is automatically paused for user to press play
  const onPlayerReady: YouTubeProps["onReady"] = (e) => {
    // set target state to player obj (use for pause button)
    console.log('onplayerready')
    console.log('e.target:', e.target)
    setVideoObject(e.target);
    e.target.pauseVideo();
  };

  const handleInputChange = (val: string) => {
    setYoutubeLink(val);
    setYoutubeId(getYouTubeID(val));
    setLinkInputted(true);
    fetch('/api/notes/1')
      .then(response => response.json())
      .then((data) => {
        // console.log('is there even data here??from handleInputChange:', data);
        setNoteSummary(data.notes);
      })
      .catch((err: object) => {
        console.log('Error in handleInputChange.. is there even data thats been received?', err);
      })
      
  };

  // // handles note button pause, sets time stamp in state
  const handleNoteInput = (val: string) => {
    console.log('val parameter:', val)
    if (!videoObject) return console.error("Target does not exist");
    videoObject.pauseVideo();
    // if (time.length === 0) {
      let seconds = Math.round(videoObject.getCurrentTime());
      setTime(new Date(seconds * 1000).toISOString().slice(11, 19));
      
    // } 
    // if (noteSummary.length)
    setContent(val);
    
    // setTime("");
  };

  const handleNoteSummary = (val: Array<{}>) => {
    // setNoteSummary((prevState) => [...prevState, val]);
    setNoteSummary((prevState) => [...prevState, val]);
  }

  const handleTitle = (val: string) => {
    console.log('title:', val)
    setTitle(val);
  }

  const handleContent = (val: string) => {
    console.log('content:', content)
    setContent(val);
  }

  const deleteNoteHandler = (val: number) => {
    console.log(`delete clicked ${val}`)
    fetch(`/api/notes/${val}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        // setNoteSummary(data)
        console.log('deletedData:', data)
        const newNoteSummary = [];
        console.log('currentNoteSummary:', noteSummary)
        for (let i = 0; i < noteSummary.length; i++){
          if (noteSummary[i].dbId !== data.dbId){
            newNoteSummary.push(noteSummary[i])
          }
        }
       setNoteSummary([...newNoteSummary])
       console.log('noteSummary', noteSummary)
          
      })
      .catch((err) => 
        console.log(err));
      }
  


  return (
    <>
    <NavBar />
    <section className="notepage">
      <SideBar
        handleNoteInput={handleNoteInput}
        youtubeLink={youtubeLink}
        time={time}
        content={content}
        title={title}
        noteSummary={noteSummary}
        handleNoteSummary={handleNoteSummary}
        handleTitle={handleTitle}
        // handleContent={handleContent}
        deleteNoteHandler={deleteNoteHandler}
        // videoSummary={videoSummary}
        videoSummaryHandler={videoSummaryHandler}
        
      />
      <VideoSection
        onPlayerReady={onPlayerReady}
        onPlayerStateChange={onPlayerStateChange}
        handleInputChange={handleInputChange}
        youtubeId={youtubeId}
        linkInputted={linkInputted}
      />
    </section>
    </>
  );
}

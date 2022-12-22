import React, { useState, useEffect } from 'react';
import './stylesheets/styles.scss';
import { Routes, Route } from 'react-router-dom';
import NotePage from "./components/NotePage/NotePage";
import Main from "./components/Homepage/Main";
import YouTube, {
  YouTubePlayer,
  YouTubeEvent,
  YouTubeProps,
} from "react-youtube";
import getYouTubeID from "get-youtube-id";

// type Video = {[key: number]: Array<object>}

export default function App() {
  const [time, setTime] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [videoObject, setVideoObject] = useState<YouTubePlayer>();
  const [youtubeLink, setYoutubeLink] = useState("");
  const [id, setId] = useState("");
  const [linkInputted, setLinkInputted] = useState(false);
  const [noteSummary, setNoteSummary] = useState([]);
  const [videoSummary, setVideoSummary] = useState({});
  const [videoNums, setVideoNums] = useState([]) // state to store video # as an array ex: [1, 2, 3, 4]
  console.log('this logs after state is changed?', videoSummary)

  useEffect(() => {
    // fetch data from database
  });
  // const obj = {}; 

    // any time there is a change in state (press play/pause), current time is aquired
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
    setId(getYouTubeID(val));
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
  const handleTitle = (val: string) => {
    console.log('title:', val)
    setTitle(val);
  }

  const handleNoteSummary = (val: Array<{}>) => {
    // setNoteSummary((prevState) => [...prevState, val]);
    setNoteSummary((prevState) => [...prevState, val]);
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

    // handles note button pause, sets time stamp in state
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

  const videoSummaryHandler = (notesSum: Array<object>) => {
    console.log('val from handler:', notesSum)
    // const newVideoSummary: Video = {...videoSummary};
    const newVideoNums = [...videoNums];
    const newVideoSummary: Record<string, Array<object>> = {...videoSummary}
      //https://blog.logrocket.com/dynamically-assign-properties-object-typescript/
      // if (newVideoNums.length === 0){
      //   console.log('working?')
      //   newVideoSummary[0] = [...notesSum]
      //   newVideoNums.push(0)
      // }
      console.log('id.....', id)
      newVideoNums.push(id);
      console.log('newVideoNums', newVideoNums)
      // if (!(id in newVideoSummary)) newVideoSummary.id = [...notesSum]
      let newId = id;
      console.log('newId..', newId)
      newVideoSummary[newId] = [...notesSum]
      setVideoSummary({...newVideoSummary});
      console.log('ayo')
    
    // MAKE SURE I LABEL EACH VIDEO WITH AN ID! TO BE ABLE TO IDENTIFY IN THE FUTURE !

    // for (let i = 0; i < val.length; i++){
    //   if (!(i in obj)) obj[i as keyof typeof obj] = val[i];
    // }
    // setVideoSummary((prevVal) => [...prevVal, obj])
  }

  console.log('this next?')
  return (
    <div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Main 
                videoSummary={videoSummary}
                videoSummaryHandler={videoSummaryHandler}
                id={id}
                onPlayerReady={onPlayerReady}
                onPlayerStateChange={onPlayerStateChange}
              />
            }
          />

          <Route
            path="/custom"
            element={
              <NotePage 
                videoSummary={videoSummary}
                videoSummaryHandler={videoSummaryHandler}
                youtubeLink={youtubeLink}
                id={id}
                linkInputted={linkInputted}
                noteSummary={noteSummary}
                handleNoteSummary={handleNoteSummary}
                deleteNoteHandler={deleteNoteHandler}
                handleInputChange={handleInputChange}
                onPlayerReady={onPlayerReady}
                onPlayerStateChange={onPlayerStateChange}
                handleNoteInput={handleNoteInput}
                handleTitle={handleTitle}
                // videoObject={videoObject}
                time={time}
                content={content}
                title={title}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
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

  const [videoSummary, setVideoSummary] = useState({});
  const [videoNums, setVideoNums] = useState([]) // state to store video # as an array ex: [1, 2, 3, 4]
  console.log('this logs after state is changed?', videoSummary)

  useEffect(() => {
    // fetch data from database
  });
  // const obj = {}; 

  const videoSummaryHandler = (notesSum: Array<object>) => {
    console.log('val from handler:', notesSum)
    // const newVideoSummary: Video = {...videoSummary};
    const newVideoNums = [...videoNums];
    const newVideoSummary: Record<number, Array<object>> = {...videoSummary}
      //https://blog.logrocket.com/dynamically-assign-properties-object-typescript/
      if (newVideoNums.length === 0){
        console.log('working?')
        newVideoSummary[0] = [...notesSum]
        newVideoNums.push(0)
      }
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
              />
            }
          />

          <Route
            path="/custom"
            element={
              <NotePage 
                videoSummary={videoSummary}
                videoSummaryHandler={videoSummaryHandler}
                // videoObject={videoObject}
                // time={time}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
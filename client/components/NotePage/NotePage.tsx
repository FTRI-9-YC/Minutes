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

export default function NotePage() {
  // State for testing - can delete if needed
  const [videoObject, setVideoObject] = useState<YouTubePlayer>();
  const [time, setTime] = useState(0);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [id, setId] = useState("");
  const [content, setContent] = useState("");
  const [linkInputted, setLinkInputted] = useState(false);
  const [title, setTitle] = useState("");
  const [noteSummary, setNoteSummary] = useState([]);
  
  useEffect(() => {
    // fetch data from database
  });

  // any time there is a change in state (press play/pause), current time is aquired
  const onPlayerStateChange: YouTubeProps["onStateChange"] = (
    e: YouTubeEvent<number>
  ) => {
    console.log(e);
  };

  // once video loads, function fires and video is automatically paused for user to press play
  const onPlayerReady: YouTubeProps["onReady"] = (e) => {
    // set target state to player obj (use for pause button)
    setVideoObject(e.target);
    e.target.pauseVideo();
  };

  const handleInputChange = (val: string) => {
    setId(getYouTubeID(val));
    setLinkInputted(true);
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then((data) => {
        setNoteSummary(data);
      })
      .catch((err: object) => {
        console.log('Error:', err);
      })
  };

  // handles note button pause, sets time stamp in state
  const handleNoteInput = (val: string) => {
    if (!videoObject) return console.error("Target does not exist");
    videoObject.pauseVideo();
    if (time === 0) {
      setTime(videoObject.getCurrentTime());
    }
    setContent(val);
  };

  const handleNoteSummary = (val: Array<{}>) => {
    setNoteSummary((prevState) => [...prevState, val]);
  }

  const handleTitle = (val: string) => {
    
  }

  return (
    <div>
      <NavBar />
      <VideoSection
        onPlayerReady={onPlayerReady}
        onPlayerStateChange={onPlayerStateChange}
        handleInputChange={handleInputChange}
        id={id}
        linkInputted={linkInputted}
      />
      <SideBar
        handleNoteInput={handleNoteInput}
        youtubeLink={youtubeLink}
        time={time}
        content={content}
        title={title}
        noteSummary={noteSummary}
        handleNoteSummary={handleNoteSummary}
        handleTitle={handleTitle}
      />
    </div>
  );
}

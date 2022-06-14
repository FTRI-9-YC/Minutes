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
    setYoutubeLink(val);
    setId(getYouTubeID(val));
    setLinkInputted(true);
    fetch('/api/notes/1')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setNoteSummary(data.notes);
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
      setTime(Math.round(videoObject.getCurrentTime()));
    }
    setContent(val);
  };

  const handleNoteSummary = (val: Array<{}>) => {
    setNoteSummary((prevState) => [...prevState, val]);
  }

  const handleTitle = (val: string) => {
    setTitle(val);
  }

  const deleteNoteHandler = (val: number) => {
    fetch('/api/notes')
      .then(response => response.json())
      .then((data) => {
        setNoteSummary(data.notes)
      })
      .catch((err: {}) => 
        console.log('Error:', err));
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
        deleteNoteHandler={deleteNoteHandler}

      />
      <VideoSection
        onPlayerReady={onPlayerReady}
        onPlayerStateChange={onPlayerStateChange}
        handleInputChange={handleInputChange}
        id={id}
        linkInputted={linkInputted}
      />
    </section>
    </>
  );
}

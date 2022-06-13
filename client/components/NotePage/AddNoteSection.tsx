import React, { useState } from "react";

interface stateChangeProps {
  handleNoteInput: (val: string) => void;
  youtubeLink: string;
  time: number;
  content: string;
}

export default function AddNoteSection({ handleNoteInput, youtubeLink, time, content }: stateChangeProps) {
  const [title, setTitle] = useState("");
  // const [contents, setContents] = useState({value: ''});
  // const [username, setUsername] = useState({value: ''});
  // const [videoLink, setVideoLink] = useState({value: ''});
  // const [videoTime, setVideoTime] = useState({value: '0'});
  const [noteSummary, setNoteSummary] = useState([]);

  function handleClick() {
    // console.log(timeStamp);
    // console.log(contents);

    const body = {
      title,
      content,
      // username,
      youtubeLink,
      time,
    };

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/api/", request)
      .then((response) => response.json())
      .then((data) => {
        setNoteSummary((prevState) => [...prevState, data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setTitle("");
  }

  return (
    <section className="addNoteSection">
      <input
        className="inputNoteTitle"
        onChange={(e: any) => setTitle(e.target.value)}
      />
      {/* <textarea text={text} onChange={handleChange}/> */}
      <textarea
        className="textArea"
        onChange={(e: any) => {
          handleNoteInput(e.target.value);
          // e is our event, t
        }}
      />
      <button className="addNoteButton" onClick={handleClick}>
        Add Note
      </button>
      {/* clicking the button will save to NotesSummary */}
    </section>
  );
}

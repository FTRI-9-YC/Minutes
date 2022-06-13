import React, { useState } from "react";

interface stateChangeProps {
  handleNoteInput: (val: string) => void;
  youtubeLink: string;
  time: number;
  content: string;
  title: string;
  noteSummary: Array<{}>;
  handleNoteSummary: (val: Array<{}>) => void;
  handleTitle: (val: string) => void;
}

export default function AddNoteSection({ handleNoteInput, youtubeLink, time, content, title, noteSummary, handleNoteSummary, handleTitle}: stateChangeProps) {
  
  
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

    fetch("/api/notes/", request)
      .then((response) => response.json())
      .then((data) => {
        handleNoteSummary(data.newNote);
      })
      .catch((err) => {
        console.log(err);
      });
      handleTitle("");
  }

  return (
    <section className="addNoteSection">
      <input
        className="inputNoteTitle"
        onChange={(e: any) => handleTitle(e.target.value)}
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

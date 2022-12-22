import React, { useState } from "react";

interface stateChangeProps {
  handleNoteInput: (val: string) => void;
  youtubeLink: string;
  time: string;
  content: string;
  title: string;
  noteSummary: Array<{}>;
  handleNoteSummary: (val: Array<{}>) => void;
  handleTitle: (val: string) => void;
  // handleContent: (val: string) => void;
  // videoSummary: Record<number, object[]>
  // videoSummaryHandler: (val: Array<object>) => void,
}

export default function AddNoteSection({ 
  handleNoteInput, 
  youtubeLink, 
  time, 
  content, 
  title, 
  noteSummary, 
  handleNoteSummary, 
  handleTitle,
  // videoSummary,
  // videoSummaryHandler
  // handleContent
}: stateChangeProps) {
  
  
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
    console.log('body:', body)
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/api/notes/", request)
      .then((response) => response.json())
      .then((data) => {
        console.log('data received to pass in handleNoteSummary:', data)
        handleNoteSummary(data);
        
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
        placeholder='Note title...'
        type="text"
      />
      {/* <textarea text={text} onChange={handleChange}/> */}
      <textarea
        className="textArea"
        onChange={(e: any) => {
          handleNoteInput(e.target.value);
          // e is our event, t
        }}
        placeholder='Note contents...'
      />
      <button className="addNoteButton" onClick={handleClick}>
        Add Note
      </button>
      {/* clicking the button will save to NotesSummary */}
    </section>
  );
}

import React from "react";
import AddNoteSection from "./AddNoteSection";
import NotePrevAccordian from "./NotePrevAccordian";

interface stateChangeProps {
  handleNoteInput: (val: string) => void,
  youtubeLink: string,
  time: number,
  content: string,
  title: string,
  noteSummary: Array<object>,
  handleNoteSummary: (val: Array<object>) => void,
  handleTitle: (val: string) => void,
  deleteNoteHandler: (val: number) => any
}



export default function SideBar({ handleNoteInput, youtubeLink, time, content, title, noteSummary, handleNoteSummary, handleTitle, deleteNoteHandler }: stateChangeProps) {
  


  return (
    <div>
      <AddNoteSection
        handleNoteInput={handleNoteInput}
        youtubeLink={youtubeLink}
        time={time}
        content={content}
        title={title}
        noteSummary={noteSummary}
        handleNoteSummary={handleNoteSummary}
        handleTitle={handleTitle}

      />
      <NotePrevAccordian noteSummary={noteSummary} deleteNoteHandler={deleteNoteHandler} />
       
    </div>
  );
}

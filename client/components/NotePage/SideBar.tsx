import React from "react";
import AddNoteSection from "./AddNoteSection";
import NotePrevAccordian from "./NotePrevAccordian";

interface stateChangeProps {
  handleNoteInput: (val: string) => void;
  youtubeLink: string;
  time: number;
  content: string;
}

export default function SideBar({ handleNoteInput, youtubeLink, time,content }: stateChangeProps) {
  return (
    <div>
      <AddNoteSection
        handleNoteInput={handleNoteInput}
        youtubeLink={youtubeLink}
        time={time}
        content={content}
      />
      <NotePrevAccordian />
    </div>
  );
}

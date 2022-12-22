import React from 'react';
import Note from './Note';

interface stateChangeProps {
    noteSummary: Array<any>,
    deleteNoteHandler: (val: number) => any,
    // videoSummary: Array<object>,
    // videoSummaryHandler: (val: Array<object>) => void,
}
  
  
export default function NotePrevAccordian({noteSummary, deleteNoteHandler}: stateChangeProps) {
    console.log('noteSummary from accordian:', noteSummary)
    const notes = noteSummary.map((note) => {
        return <Note
          key={note.dbId} 
          title={note.title}
          time={note.time}
          content={note.content} 
          _id={note.dbId}
          deleteNoteHandler={deleteNoteHandler}
          />
      })

    return (
        <div>{notes}</div>
        
    )
}
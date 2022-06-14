import React from 'react';
import Note from './Note';

interface stateChangeProps {
    noteSummary: Array<any>,
    deleteNoteHandler: (val: number) => any
}
  
  
export default function NotePrevAccordian({noteSummary, deleteNoteHandler}: stateChangeProps) {

    const notes = noteSummary.map((note) => {
        return <Note 
          title={note.title}
          time={note.time}
          content={note.content} 
          _id={note._id}
          deleteNoteHandler={deleteNoteHandler}
          />
      })

    return (
        <div>{notes}</div>
        
    )
}
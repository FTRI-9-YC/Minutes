import React from 'react';
import Note from './Note';

interface stateChangeProps {
    noteSummary: Array<any>;
}
  
  
export default function NotePrevAccordian({noteSummary}: stateChangeProps) {

    const notes = noteSummary.map((note) => {
        return <Note 
          title={note.title}
          time={note.time}
          content={note.content} 
          
          />
      })

    return (
        <div>{notes}</div>
    )
}
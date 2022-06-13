import React from 'react';
import NoteSummaryNote from './NoteSummaryNote';
interface stateChangeProps {
    noteSummary: Array<any>
}

export default function NotesSummary ( { noteSummary }: stateChangeProps){
    const notes = noteSummary.map((note) => {
        return <NoteSummaryNote
          title={note.title}
          time={note.time}
          content={note.content} 
          _id={note._id}
          />
      })
    return (
        <div>
            {notes}
        </div>
    )
}
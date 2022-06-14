import React, { useState } from "react";

interface stateChangeProps {
    title: string,
    time: number,
    content: string,
    _id: number,
    deleteNoteHandler: (val: number) => any
}

export default function Note ({ title, time, content, _id, deleteNoteHandler }: stateChangeProps){
  const [hideContent, setHideContent] = useState(true);

  return (
    <section className="individualNote">
      <div className="preview" onClick={() => setHideContent(prev => !prev)}>
        <p>{title} <span className="time">{time}</span></p>
      </div>
      {!hideContent && <div className="content">
        <p>Content: {content}</p>
        <button onClick={() => deleteNoteHandler(_id)}>Delete</button>
      </div>}
    </section>
  )
}
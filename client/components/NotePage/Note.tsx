import React, { useState } from "react";

interface stateChangeProps {
    title: string,
    time: number,
    content: string,
    _id: number,
    deleteNoteHandler: (val: number) => any
}

export default function Note ({ title, time, content, _id, deleteNoteHandler }: stateChangeProps){
    return (
    <div className="individualNote">
      <p>Title: {title}</p>
      <p>Time: {time}</p>
      <p>Content: {content}</p>
      <button onClick={deleteNoteHandler(_id)}>Delete</button>
    </div>
    )
}
import React, { useState } from "react";
import YouTube, { YouTubeProps } from 'react-youtube';

interface props {
  ex: number
    // title: string,
    // // time: string,
    // content: string,
    // dbId: number,
    // deleteNoteHandler: (val: number) => any
}

export default function Video ({ ex }: props ){
  // export default function Note ({ title, content, _id, deleteNoteHandler }: stateChangeProps){
//   const [hideContent, setHideContent] = useState(true);

  return (
    <section className="individualVideo">
      {/* <div className="preview" onClick={() => setHideContent(prev => !prev)}> */}
        {/* <p>{title} <span className="time">{time}</span></p>
      </div>
      {!hideContent && <div className="content">
        <p>Content: {content}</p>
        <button onClick={() => deleteNoteHandler(_id)}>Delete</button>
      </div>} */}
      <div>
       <p>title: {ex}</p>

         {/* <p>content: {content}</p> */}
        {/* <p>id: {dbId}</p>  */}
      
      </div>
    </section>
  )
}
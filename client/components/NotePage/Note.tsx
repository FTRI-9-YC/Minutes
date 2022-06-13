import React, { useState } from "react";

interface stateChangeProps {
    title: string,
    time: number,
    content: string
}
export default function Note ({ title, time, content }: stateChangeProps){
    return (
    <div className="individualNote">
      <p>Title: {title}</p>
      <p>Time: {time}</p>
      <p>Content: {content}</p>
    </div>
    )
}
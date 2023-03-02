import React from 'react';

interface stateChangeProps {
    title: string,
    time: string,
    content: string,
    _id: number
}
export default function NotesSummaryNote ({ title, time, content, _id }: stateChangeProps){
    return (
        <div className="individualNote">
            <p>Title: {title}</p>
            <p>Time: {time}</p>
            <p>Content: {content}</p>
        </div>
    )
}
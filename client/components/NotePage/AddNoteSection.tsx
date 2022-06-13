import React from 'react';
interface stateChangeProps {
        handleNoteButtonPause: () => void,
    }

export default function AddNoteSection ( { handleNoteButtonPause }: stateChangeProps){
    
    return (
        <div>
            <button onClick={ handleNoteButtonPause }></button>
        </div>
    )
}
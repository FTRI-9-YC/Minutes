import React from 'react';
import AddNoteSection from './AddNoteSection';
import NotePrevAccordian from './NotePrevAccordian';

interface stateChangeProps {
    handleNoteButtonPause: () => void
}

export default function SideBar ({ handleNoteButtonPause }: stateChangeProps) {
    return (
        <div>
            <AddNoteSection handleNoteButtonPause={ handleNoteButtonPause } />
            <NotePrevAccordian />
        </div>
    )
}
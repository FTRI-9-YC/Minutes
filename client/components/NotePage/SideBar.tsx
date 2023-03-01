import React, { useState } from "react";
import AddNoteSection from "./AddNoteSection";
import NotePrevAccordian from "./NotePrevAccordian";
import { Link } from 'react-router-dom';

interface stateChangeProps {
  handleNoteInput: (val: string) => void,
  youtubeLink: string,
  time: string,
  content: string,
  title: string,
  noteSummary: Array<object>,
  handleNoteSummary: (val: Array<object>) => void,
  handleTitle: (val: string) => void,
  // handleContent: (val: string) => void,
  deleteNoteHandler: (val: number) => any,
  // handleSaveNotes: (val: ) => any
  // videoSummary: Record<number, object[]>
  videoSummaryHandler: (val: Array<object>) => void,
  
}



export default function SideBar({ handleNoteInput, youtubeLink, time, content, title, noteSummary, handleNoteSummary, handleTitle, deleteNoteHandler, videoSummaryHandler }: stateChangeProps) {
  
  const [ savedNoteInfo, setSavedNoteInfo ] = useState({
    // link: '',
    // videoId?? 
    // videoTitle: '',
    listOfNotes: [], // array of objects. each object would have the title of note, note content, and time 
    thumbnail: '' // ?? the still image of the video!
  })
  const [ listOfVideos, setListOfVideos ] = useState([]);
  // MUST UPDATE STATE EVERYTIME A NEW NOTE/YOUTUBE LINK IS INPUTTED ! 


  const handleSaveNotes = () => {
    
    const saveInfo = {
      // link: youtubeLink,
      // videoTitle: title,
      listOfNotes: noteSummary
    };
    console.log('saveInfo:,', saveInfo)
    fetch('../api/videos', {
      method: 'POST',
      body: JSON.stringify(saveInfo),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        // if (Object.keys(data).length <= 1) throw 'Incorrect shape of response';
        // return this.props.addCharacter([data])
        console.log('data received:',data)
        return videoSummaryHandler(data.listOfNotes);
      })
      .catch(err => console.log('handleSaveNotes: ERROR: ', err));
  }
  console.log('or thisssss? idk')
  return (
    <section className="sidebar"> 
      <AddNoteSection
        handleNoteInput={handleNoteInput}
        youtubeLink={youtubeLink}
        time={time}
        content={content}
        title={title}
        noteSummary={noteSummary}
        handleNoteSummary={handleNoteSummary}
        handleTitle={handleTitle}
        // handleContent={handleContent}
        // videoSummary={videoSummary}
        // videoSummaryHandler={videoSummaryHandler}

      />
      <NotePrevAccordian 
        noteSummary={noteSummary} 
        deleteNoteHandler={deleteNoteHandler}
        // videoSummary={videoSummary}
        // videoSummaryHandler={videoSummaryHandler} 
        />
      
      <button onClick={handleSaveNotes}>Save Notes</button>



<Link to="/">
<button>Homepage</button>
</Link>
    </section>
  );
}

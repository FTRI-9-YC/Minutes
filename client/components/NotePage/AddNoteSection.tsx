import React, { useState } from 'react';


export default function AddNoteSection (){
    const [title, setTitle] = useState({value: ''});
    const [contents, setContents] = useState({value: ''});
    // const [username, setUsername] = useState({value: ''});
    const [videoLink, setVideoLink] = useState({value: ''});
    const [videoTime, setVideoTime] = useState({value: '0'});
    const [noteSummary, setNoteSummary] = useState([]);

   
    function handleClick(){
        console.log(title, contents);

      const body = {
        title,
        contents,
        // username,
        videoLink,
        videoTime
      };

      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      fetch("/api/", request)
        .then((response) => response.json())
        .then(data => {
            setNoteSummary(prevState => [ ...prevState, data])
        })
        .catch((err) => {
          console.log(err);
        });
        setTitle({value: ''});
        setContents({value: ''});
        setVideoTime({value: ''});
    }
    
    
    return (
  
        <section className="addNoteSection">
          <input 
            className="inputNoteTitle" 
            onChange={(e : any) => setTitle(e.target.value)}/>
            {/* <textarea text={text} onChange={handleChange}/> */}
          <textarea 
            className="textArea" 
        onChange={(e : any) => {
              setContents(e.target.value);
            //   setVideoTime()
            //  .getCurrentTime()
              
                }
              }/>
          <button className="addNoteButton" onClick={handleClick}>Add Note</button> 
            {/* clicking the button will save to NotesSummary */}
        </section>

    )
}



//create input box
// as soon as user applies text inside the input box, it should
// grab the video time & and have it visible to the user.
    // apply an if statement (if box is empty)
    // if box isn't empty, have an onChange event occur where we grab the time
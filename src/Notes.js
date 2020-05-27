import React from 'react';

function Notes(props){
    const notes = props.notes;
    const listNotes = notes.map(note => 
        {
            return <div> 
                <p> {note.text} </p>
                <p> {note.title} </p> 
                <p> {note.key}</p>
                </div>

    
    })
    return(
        <div> {listNotes} </div>

    )
};

export default Notes;


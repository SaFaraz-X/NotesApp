import React from 'react';

function Notes(props){
    const notes = props.notes;
    const listNotes = notes.map(note => 
        {
            return <div key={note.key}> 
                <p> 
                {note.text}
                {note.title}
                <button type="button" class="btn btn-default" aria-label="Right Align" 
                color="black" onClick={ () => props.deleteNote(note.key)}>
                <span class="glyphicon glyphicon-trash" aria-hidden="false" color='black'>
                
                </span> 
                </button>
                </p> 

            </div>

    
    })
    return(
        <div> {listNotes} </div>

    )
};

export default Notes;


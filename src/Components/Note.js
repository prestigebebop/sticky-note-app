import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

//one way data flow => NoteList has props of notes that contains the entire array of note objects, and Note technically has access to this as well. We created title and content props inside NoteList to be passed here as props
const Note = ({noteTitle, noteContent, onDelete, id}) => {

    return(
        <div className='note' style={{fontFamily: 'Shadows Into Light', fontSize: '20px'}}>
            <h1>{noteTitle}</h1>
            <p>{noteContent}</p>
            <Fab onClick={() => onDelete(id)}>
                <DeleteIcon />
            </Fab>
        </div>
    );
};

export default Note;
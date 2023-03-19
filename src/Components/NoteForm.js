import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function NoteForm({addNote}){

    const [fullNote, setFullNote] = React.useState({
        noteTitle: '',
        noteContent: ''
      });

    const {noteTitle, noteContent} = fullNote;
    
    const [areaIsExpanded, setExpandedArea] = React.useState(false);

      const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFullNote({
            ...fullNote,
            [name]: value
        })
        // setFullNote(previousValues => {
        //     return {
        //         ...previousValues,
        //         [name]: value
        //     };
        // });
    };

    const submitNote = (event) => {
        addNote(fullNote);
        setFullNote({noteTitle: '', noteContent: ''});
        event.preventDefault();
    };

    const expandArea = () => {
        setExpandedArea(true);
    };

    return (
    <div>
        <form className='create-note'>
            {
                areaIsExpanded ? <input onChange={handleInputChange} placeholder='Note Title' value={noteTitle} name='noteTitle'></input> : null
            }
            <textarea onChange={handleInputChange} onClick={expandArea} placeholder='Write a new note...' value={noteContent} name='noteContent' rows={areaIsExpanded ? 3 : 1}></textarea>
            <Zoom in={areaIsExpanded ? true : false}>
                <Fab type='submit' onClick={submitNote}>
                    <AddCircleIcon />
                </Fab>
            </Zoom>

        </form>
    </div>
    );
};


export default NoteForm;
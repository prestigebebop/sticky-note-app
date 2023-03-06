import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function NoteForm({addNote}){

    const [fullNote, setFullNote] = React.useState({
        noteTitle: '',
        noteContent: ''
      });
    
    const [areaIsExpanded, setExpandedArea] = React.useState(false);

      function handleInputChange(event){
        const {name, value} = event.target;
        setFullNote(previousValues => {
            return {
                ...previousValues,
                [name]: value
            };
        });
    };

    function submitNote(event){
        addNote(fullNote);
        setFullNote({noteTitle: '', noteContent: ''});
        event.preventDefault();
    };

    function expandArea(){
        setExpandedArea(true);
    };

    return (
    <div>
        <form className='create-note'>
            {areaIsExpanded ? <input onChange={handleInputChange} placeholder='Note Title' value={fullNote.noteTitle} name='noteTitle'></input> : null}
            <textarea onChange={handleInputChange} onClick={expandArea} placeholder='Write a new note...' value={fullNote.noteContent} name='noteContent' rows={areaIsExpanded ? 3 : 1}></textarea>
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
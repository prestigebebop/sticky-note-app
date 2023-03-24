import React from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import NoteForm from './Components/NoteForm.js';
import Note from './Components/Note.js';

function App () {
  const [notesArray, setNotesArray] = React.useState([]);

  const appendNote = (fullNote) => {
    setNotesArray(previousValues => {
        return [
            ...previousValues,
            fullNote
        ];
    });
};

const deleteNote = (id) => {
  setNotesArray(notesArray => {
    return notesArray.filter((noteObject, i) => {
      return i !== id;
    });
  });
};

  return(
    <div>
      <Header />
      <NoteForm addNote={appendNote}/>

      {
        notesArray.map((note, i) => (<Note key={i} id={i} noteTitle={note.noteTitle} noteContent={note.noteContent} onDelete={deleteNote}/>))
      }

      <Footer />
    </div>
  );
};

export default App;

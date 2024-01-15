import { createContext, useState } from "react";

export const NotesContext = createContext({
    ids: [],
    addNote: (id) => { },
    removeNote: (id) => { },
})

export default function NotesContextProvider({ children }) {
    const [noteIds, setNoteIds] = useState([]);

    function addNote(id) {
        setNoteIds((currentNote) => [...currentNote, id]);
    }

    function removeNote(id) {
        setNoteIds((currentNote) => currentNote.filter((noteId) => noteId != id));
    }

    const value = {
        ids: noteIds,
        addNote: addNote,
        removeNote: removeNote
    }

    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}
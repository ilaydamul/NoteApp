import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { NotesContext } from '../store/notes-context';
import { useContext, useEffect, useState } from 'react';
import NoteItem from '../components/NoteItem';
import { globalStyles } from '../styles';
import Title from '../components/Title';

export default function Notes() {
    const notes = useContext(NotesContext);
    const [notesData, setNotesData] = useState();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await notes.allNotes();
                var items = await response.json();
                setNotesData(items);

            } catch (error) {
                console.log(error);
            }
        }

        fetchNotes();
    }, [NotesContext])



    return (
        <View style={{ ...globalStyles.container }}>
            <Title>Notlarım</Title>
            {notesData ? <FlatList data={notesData} renderItem={({ item }) => <NoteItem item={item} keyExtractor={(item) => item.id.toString()} />} /> : <ActivityIndicator size="small" />}


        </View>
    )
}

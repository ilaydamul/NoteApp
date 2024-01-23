import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { NotesContext } from '../store/notes-context';
import { useContext, useEffect, useState } from 'react';
import NoteItem from '../components/NoteItem';
import { globalStyles } from '../styles';
import Title from '../components/Title';
import TitleGroup from '../components/TitleGroup';
import ButtonStyle from '../components/ButtonStyle';
import { Ionicons } from '@expo/vector-icons';
import AddNote from '../components/layouts/AddNote';

export default function Notes({navigation}) {
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

    const addNoteHandler = () => {
        console.log("ekle");
        navigation.navigate("AddNote");
    }

    return (
        <View style={{ ...globalStyles.container }}>

            <TitleGroup style={{ marginBottom: 12 }}>
                <Title customStyle={{ marginBottom: 0 }}>Notlarım</Title>
                <ButtonStyle text={<Ionicons name='add' size={20} />} style={{ paddingHorizontal: 6 }} onPress={addNoteHandler} />
            </TitleGroup>
            {notesData ? <FlatList data={notesData} renderItem={({ item }) => <NoteItem item={item} keyExtractor={(item) => item.id.toString()} />} /> : <ActivityIndicator size="small" />}


        </View>
    )
}

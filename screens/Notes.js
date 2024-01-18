import { Text, View } from 'react-native';
import Button from '../components/Button';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { NotesContext } from '../store/notes-context';
import { useContext, useEffect } from 'react';

export default function Notes() {
    const notes = useContext(NotesContext);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await notes.allNotes();
                console.log(response.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchNotes();
    }, [NotesContext])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Nots
            </Text>
        </View>
    )
}

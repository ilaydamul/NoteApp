import { FlatList, Text, View } from 'react-native';
import Button from '../components/ButtonStyle';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Title from '../components/Title';
import { globalStyles } from '../styles';
import { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../store/notes-context';
import NoteItem2 from '../components/NoteItem2';


export default function Home({ navigation }) {
  const [notesData, setNotesData] = useState([]);
  const notes = useContext(NotesContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await notes.allNotes();
      var items = await response.json();
      items.forEach((element, i) => {
        if (element.id < 21) {
          setNotesData((noteItem) => [...noteItem, element]);
        }
      });
    }

    fetchNotes();
  }, [])


  return (
    <View style={{ ...globalStyles.container }}>
      <Title>İlk 10 Not</Title>
      <View style={{height:180}}>
        <FlatList data={notesData} renderItem={({ item }) => <NoteItem2 item={item} keyExtractor={(item) => item.id.toString()+"1"} />} />
      </View>
    </View>
  )
}

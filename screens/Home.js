import { ActivityIndicator, FlatList, View } from 'react-native';
import Title from '../components/Title';
import { globalStyles } from '../styles';
import { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../store/notes-context';
import NoteItem2 from '../components/NoteItem2';
import MainSlider from '../components/MainSlider';


export default function Home() {
  const [notesData, setNotesData] = useState([]);
  const notes = useContext(NotesContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await notes.allNotes();
      var items = await response.json();
      const filteredNotes = items.filter((element) => element.id < 21);
      setNotesData(filteredNotes);
    }

    fetchNotes();
  }, [])


  return (
    <View >
      <View style={{ height: "50%" }}>
        <MainSlider />
      </View>

      <View style={{ ...globalStyles.container }}>
        <Title>İlk 10 Not</Title>
        <View style={{ height: 180 }}>
          {notesData ? <FlatList data={notesData} renderItem={({ item }) => <NoteItem2 item={item} />} keyExtractor={(item) => item.id.toString()} /> : <ActivityIndicator size='small' />}
        </View>
      </View>
    </View>
  )
}

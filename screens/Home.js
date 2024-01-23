import { ActivityIndicator, FlatList, View, ScrollView } from 'react-native';
import Title from '../components/Title';
import { globalStyles } from '../styles';
import { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../store/notes-context';
import NoteItem2 from '../components/NoteItem2';
import MainSlider from '../components/MainSlider';
import CategorySlider from '../components/CategorySlider';
// import { ScrollView } from 'react-native-virtualized-view';
// import { ScrollView } from 'react-native-gesture-handler';


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
    <ScrollView>
      <View style={{ height: "10" }}>
        <MainSlider />
      </View>
      <View style={{ ...globalStyles.container }}>
        <View>
          <Title>Kategoriler</Title>
          <CategorySlider />
        </View>
        <View>
          <Title>İlk 10 Not</Title>
          <View style={{ height: 180 }}>
            {notesData ? <FlatList data={notesData} nestedScrollEnabled renderItem={({ item }) => <NoteItem2 item={item} />} keyExtractor={(item) => item.id.toString()} horizontal={false} /> : <ActivityIndicator size='small' />}
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

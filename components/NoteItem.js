import { Text, StyleSheet, View } from 'react-native';

export default function NoteItem({ item }) {
    
    return (
        <View style={[style.item, { backgroundColor: item.completed ? 'red' : 'green' }]}>
            <Text style={style.itemTitle}>{item.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        textAlign: "center",
        marginBottom: 6,
        padding: 12,
        borderRadius: 6
    },
    itemTitle: {
        color: "white"
    }

})

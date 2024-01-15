import { TextInput, StyleSheet, View, Text } from 'react-native';

export default function Input({ label, value, onChangeInput }) {

    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={style} value={value} onChangeText={onChangeInput} />
        </View>

    )
}

const style = StyleSheet.create({
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 12
});
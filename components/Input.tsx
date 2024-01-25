import { TextInput, StyleSheet, View, Text } from 'react-native';

export default function Input({ label, onChangeInput, placeholder, value, customStyle }) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={[style.inputStyle, customStyle]} value={value} onChangeText={onChangeInput} placeholder={placeholder} />
        </View>
    )
}

const style = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 40,
        borderRadius: 6,
        paddingHorizontal: 12,
        marginBottom: 12
    }
});
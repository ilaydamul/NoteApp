import { Text, StyleSheet } from 'react-native';

export default function Link({ children, onPress }) {

    return (
        <Text style={{ ...(style || {}) }} onPress={onPress}>
            {children}
        </Text>
    )
}

const style = StyleSheet.create({
    color: "#00ADB5", textAlign: "center", marginTop: 12
})

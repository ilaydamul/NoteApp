import { Text, StyleSheet } from 'react-native';

export default function Link({ children, onPress }) {

    return (
        <Text style={{ ...(style.textStyle || {}) }} onPress={onPress}>
            {children}
        </Text>
    )
}

const style = StyleSheet.create({
    textStyle:{
        color: "#00ADB5", 
        textAlign: "center", 
        marginTop: 12
    }
})

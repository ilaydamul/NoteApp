import { Text, StyleSheet } from 'react-native';

export default function Title({ children, textcenter=false, customStyle={} }) {
    return (
        <Text style={{ ...(style.textStyle || {}), textAlign: textcenter ? "center" : "left", ...(customStyle || "") }}>
            {children}
        </Text >
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 24, 
        fontWeight: "bold", 
        color: "#222831", 
        marginBottom: 12
    }

})

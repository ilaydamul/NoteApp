import { Text, StyleSheet } from 'react-native';

export default function Title({ children, textcenter }) {
    return (
        <Text style={{ ...(style || {}), textAlign: textcenter ? "center" : "left" }}>
            {children}
        </Text>
    )
}

const style = StyleSheet.create({
    fontSize: 24, fontWeight: "bold", color: "#222831", marginBottom: 12
})

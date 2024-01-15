import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ text, onPress }) {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#222831",
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    pressed: {
        opacity: 0.7
    },
    buttonText: {
        textAlign: "center",
        color: "#EEEEEE",
        fontSize: 16,
        fontWeight: "bold"
    }
})

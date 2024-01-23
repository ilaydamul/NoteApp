import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingTop: 16
    },
    container2: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 16
    },
    errorTxt: {
        color: "red",
        marginBottom: 10
    }, 
    itemsCenter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
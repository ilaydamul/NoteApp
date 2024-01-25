import { StyleSheet, View } from "react-native";
import { globalStyles } from "../styles";


export default function TitleGroup({ children, style }) {
    return (
        <View style={[globalStyles.itemsCenter, style]}>
            {children}
        </View>
    )
}

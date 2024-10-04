import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";

export const Styles = StyleSheet.create({
    maskContainer: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'blue',
    },
    text: {
        fontFamily: fonts.COMMON_REGULAR,
        // color: 'white'
    }
});
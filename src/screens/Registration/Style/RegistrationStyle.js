import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";
import { Colors } from "../../../theme/Colors";

export const Styles = StyleSheet.create({
    registrationMainContainer: {
        flex: 1, 
        backgroundColor: Colors.primary,
        paddingHorizontal: 24
    },
    newUserDesContainer: {
        width: '100%',
        paddingVertical: 40,
        gap: 5,
    },

    textCommon: {
        color: '#fff',
    },
    createAccount: {
        fontFamily: fonts.COMMON_REGULAR,
        fontSize: 26,
    },
    
    greetings: {
        color: '#575757',
        fontSize: 16,
    },

});
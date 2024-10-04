import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";
import { Colors } from "../../../theme/Colors";

export const Styles = StyleSheet.create({
    forgotPassMainContainer: {
        flex: 1, 
        backgroundColor: Colors.primary,
        paddingHorizontal: 24
    },
    forgotPassDesContainer: {
        paddingVertical: 40,
        gap: 24,
    },
    commonTextFont: {
        fontFamily: fonts.COMMON_REGULAR
    },

    forgotPassHeading: {
        fontSize: 26, 

    },
    forgotPassInfo: {
        fontSize: 16,
        color: '#575757',
    },
    formContainer: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 16,
    }
});
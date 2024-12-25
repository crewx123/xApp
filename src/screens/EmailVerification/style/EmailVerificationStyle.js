import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/Colors";
import { fonts } from "../../../theme/Fonts";

export const Styles = StyleSheet.create({
    emailVeriMainContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: 24,
        marginTop: 24,
    },
    emailVeriDesContainer: {
        paddingVertical: 40,
        gap: 8
    },
    commonTextFont: {
        fontFamily: fonts.COMMON_REGULAR,
        color: '#161D23',
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
    },
    resendOtpTextContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
        gap: 8,
    },

    resendOtpText: {
        color: '#D80D5F',
        textDecorationLine: "underline"
    } 
});
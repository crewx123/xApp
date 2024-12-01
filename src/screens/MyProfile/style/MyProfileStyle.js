import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";

export const Styles = StyleSheet.create({
    myProfileMainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24
    },
    myPorfileHeadingContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    commonTextStyle: {
        fontFamily: fonts.COMMON_REGULAR,
        fontSize: 26,
        color: '#000'
    },
    backBtnContainer: {
        position: 'absolute',
        left: 0
    }
});

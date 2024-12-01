import { StyleSheet } from "react-native";
import { fonts } from "../../../../theme/Fonts";

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
        alignItems: 'center',
        paddingBottom: 16
    },

    commonTextStyle: {
        fontFamily: fonts.COMMON_REGULAR,
        fontSize: 26,
        color: '#000'
    },
    backBtnContainer: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    scrollViewContainer: {
        flex: 1
    },
    avatarImageContainer: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'column',
        // gap: 12
    }
});
import { StyleSheet } from "react-native";
import { fonts } from "../../../../theme/Fonts";

export const Styles = StyleSheet.create({
    myPolicyMainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },

    policyHeadlineContainer: {
        flexDirection: 'column',
        gap: 8,
    },

    commonTextStyle: {
        fontFamily: fonts.COMMON_REGULAR,
        fontSize: 26,
        color: '#000',
    },

    backBtnContainer: {
        position: 'absolute',
        left: 0
    },
    searchBarContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderColor: '#000', 
    },
});
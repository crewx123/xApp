import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";

export const Styles = StyleSheet.create({
    productSearchContainer: {
        flex: 1,
        paddingHorizontal: 24
    },
    productSearchBar: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingVertical: 6,
        paddingTop: 14,
        fontFamily: fonts.COMMON_REGULAR
    },
    productHeadingContainer: {
        width: '100%',
        paddingVertical: 16
    },
    searchedTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 26,
        paddingBottom: 17
    },
    searchContainer: {
        flexDirection: 'column',
        paddingRight: 32,

    },
    searchedText: {
        color: '#fff', 
        fontFamily: fonts.COMMON_REGULAR,
        fontSize: 12
    }
});
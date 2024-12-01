import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { fonts } from "../../../../theme/Fonts";
const { width } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    filterContainer: {
        flex: 1,
        paddingHorizontal: 24
    },
    filterSearchBar: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingVertical: 6,
        paddingTop: 14,
        fontFamily: fonts.COMMON_REGULAR
    },
});
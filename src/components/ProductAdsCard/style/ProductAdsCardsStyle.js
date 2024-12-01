import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,     
    },
    headingContainer: {

    },
    headingText: {
        fontFamily: fonts.COMMON_REGULAR,
        color: '#000',
        fontSize: 22,
        fontWeight: '700'
    },
    allSubCategoryContainer: {
        overflow: 'hidden',
    },
    adsCardContainer: {
        position: 'relative',
        paddingRight: 8,
        paddingBottom: 5,
    },
    adImage: {
        width: width - 130,
        height: 360,
    },
    eachSubCategoryInfoContainer: {
        position: 'relative'
    },
    eachSubCategoryNameContainer:{
        position: 'absolute', 
        bottom: 64, 
        left: 24, 
        right: 24
    },
    subCatergoryName: {
        color: '#fff',
        fontSize: 24,
        // fontWeight: '700',
        letterSpacing: 2.5,
        fontFamily: fonts.COMMON_REGULAR,
    },
    btnContainer: {
        position: 'absolute',
        bottom: 24, 
        left: 24,
        borderRadius: 50,
        backgroundColor: '#fff',
        paddingVertical: 9,
        paddingHorizontal: 12
    },
    btnName: {
        color: '#232323',
        fontWeight: '400',
        fontFamily: fonts.COMMON_REGULAR
    }
});
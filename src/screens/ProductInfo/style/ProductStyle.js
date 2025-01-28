import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../../../theme/Fonts";

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    productInfoMainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sizeSelectorBoxPopUpContainer: {
        alignSelf: 'center',
        width: '90%',
        position: 'absolute',
        bottom: 24,
        backgroundColor: '#000',
        zIndex: 5,
        borderRadius: width/2,
        padding: 17,
        opacity: 0.98,
    },
    productImagesContainer: {
        height: height-332,
    },
    image: {
        width: width,
        height: height - 275,
        backgroundColor: '#000',
    },
    productColorsContainer: {
        paddingVertical: 4,
        paddingHorizontal: 8, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    eachColor: {
        width: 57, 
        height: 75,
        borderRadius: 6,
    },
    productCategoryInfoContainer: {
        flexDirection: 'column',
        gap: 6,
        paddingVertical: 8,
        paddingHorizontal: 12, 
        borderBottomWidth: 0.8,
        borderBottomColor: '#000',
    },

    commonTextStyle: {
        fontFamily: fonts.COMMON_REGULAR,
        color: '#000'
    },
    categoryNameAndColorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shippingTypeContainer: {
        width: 75,
        backgroundColor: 'rgb(0, 0, 0)',
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 4,
    },

    sizeContainer: {
        flexDirection: 'column',
        padding: 12,
        borderBottomWidth: 0.8,
        borderBottomColor: '#000',
    },
    highLights: {
        flexDirection: 'column',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 0.8,
        borderBottomColor: '#000',
    },
    productSpecs: {
        flexDirection: 'column',
        paddingBottom: 8,
    },
    moreRelaventProduct: {
        flexDirection: 'column',
        gap: 4,
    }
});

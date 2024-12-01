import { StyleSheet } from "react-native";
import { fonts } from "../../../../theme/Fonts";

export const Styles = StyleSheet.create({
    cartHeadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    headingName: {
        fontSize: 16,
        color: '#fff',
        fontFamily: fonts.COMMON_REGULAR,
        letterSpacing: 1.5,
        paddingVertical: 8,
    },
    cartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        padding: 16
    },
    cartItemsContainer: {
        flexDirection: 'row',
        gap: 20,
        // padding: 16,
    },
    productImage: {
        width: 110,
        height: 140,
        borderRadius: 5,
    },
    productInfoContainer: {
        flexDirection: 'column'
    },
    colorAndSizeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    commonText: {
        fontFamily: fonts.COMMON_REGULAR,
        color: '#fff'
    },
    checkOutDetailsContainer: { 
        backgroundColor: 'rgb(10, 10, 10)',
        zIndex: 999, 
        width: '100%', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center' ,
        borderWidth: 1,
        borderColor: 'grey',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingBottom: 24
    },
    shippingTypeContainer: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'grey', 
        paddingVertical: 8
    },
    totalPaymentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16
    },

    checkOutBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
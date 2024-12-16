import { StyleSheet } from "react-native";
import { fonts } from "../../../../theme/Fonts";

export const Styles = StyleSheet.create({
    myAddressMainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24
    },

    myAddressHeadingContainer: {
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
    },

    nameHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: 8
    },
    workTypeContainer: {
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 4,
    },

    newAddressCard: {
        width: '100%',
        borderWidth: 0.5,
        paddingVertical: 16,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignContent: 'center',
        gap: 16
    },

    savedAddressContainer: {
        flex: 1,
        marginTop: 32,
        marginBottom: 16,
        width: '100%',
        flexDirection: 'column',
        gap: 12,
    },

    eachAddressContainer: {
        width: '100%',
        backgroundColor: 'rgba(200, 200, 200, 0.8)',
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: 'rgba(200, 200, 200, 0.8)',
        borderRadius: 8,
        paddingLeft: 12,
        paddingRight: 32,
        paddingVertical: 16, 
        gap: 8,
    }

});
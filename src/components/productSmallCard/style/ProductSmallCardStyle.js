import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";

export const Styles = StyleSheet.create({
    MainContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    HeadingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start', 
        justifyContent: 'space-between'
    },
    CommonFontStyle: {
        fontFamily: fonts.COMMON_REGULAR,
        color: '#000',
    },
    btnContainer: {
        borderRadius: 50,
        backgroundColor: '#232323',
        paddingVertical: 9,
        paddingHorizontal: 12
    },
    btnName: {
        color: '#fff',
        // fontWeight: '400',
        fontFamily: fonts.COMMON_REGULAR
    },
    CardContainer: {
        overflow: 'hidden',
        // shadowColor: 'red',
        // shadowOffset: { width: 10, height: 10 },
        // shadowOpacity: 0.3,
        // shadowRadius: 20,
        // elevation: 10,
    },
    CardImageContainer: {
        position: 'relative',
        paddingRight: 8,
        paddingBottom: 5,
    },
    CardImage: {
        borderRadius: 12, 
    },
    addItemIcon:{
        position: 'absolute',
        bottom: 4, 
        right: 8,
    },
    descriptionContainer: {
        flexDirection: 'column',
        marginBottom: 12
    }
})
import { StyleSheet } from "react-native";
import { fonts } from "../../../../theme/Fonts";

export const Styles = StyleSheet.create({
    myOrdersMainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24
    },

    myOrdersHeadingContainer: {
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
    searchBarContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderColor: '#000', 
    },
    allOrdersContainer: {
        marginTop: 12,
        flexDirection: 'column',
        gap: 8,
        marginBottom: 12
    },
    eachOrderContainer: { 
        width: '100%', 
        flexDirection: 'row', 
        gap: 32, 
        borderRadius: 5,
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderWidth: 1, 
        borderColor: 'rgb(150, 150, 150)', 
        paddingHorizontal: 12, 
        paddingVertical: 6, 
    },
    orderInfoContainer: { 
        flexDirection: 'row',
        alignItems: 'center', 
        gap: 32, 
    },
    orderImagesContainer: { 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 100, 
        height: 100, 
        borderRadius: 200, 
        borderWidth: 0.8, 
        borderColor: 'rgb(150, 150, 150)' 
    }
});
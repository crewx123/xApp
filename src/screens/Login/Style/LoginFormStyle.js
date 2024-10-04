import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/Colors';
import { fonts } from '../../../theme/Fonts';

export const Styles = StyleSheet.create({
    loginFormMainContainer: {
        flex: 1, 
        backgroundColor: Colors.primary,
        paddingHorizontal: 24
    },
    newUserDesContainer: {
        width: '100%',
        paddingVertical: 40,
        gap: 5,
    },

    textCommon: {
        color: '#fff',
        fontFamily: fonts.COMMON_REGULAR,
    },

    createAccount: {
        fontSize: 26,
    },
    
    greetings: {
        color: '#575757',
        fontSize: 16,
    },

    loginAdditionalInfoContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginBottom: 10
    },

    checkAndForgotBtnContainer:{ 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
    }

});
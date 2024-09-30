import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/Colors';
import { fonts } from '../../../theme/Fonts';

export const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    logoContainer: {
        // borderColor: '#fff',
        // borderWidth: 2,
        width: '100%',
        paddingTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        objectFit: 'contain',
    },
    logo: {
        width: 185,
        height: 185,
        aspectRatio: 1,
    },
    bottomContainer: { 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'flex-end' 
    },
    applicationName: {
        fontFamily: fonts.REGULAR,
        fontSize: 24.5,
    },
    buttonsMainContainer:{
        // borderColor: '#fff',
        // borderWidth: 2,
        gap: '420%', 
    },
    buttonsContainer: {
        gap: 16,
    },
    commonTextColor:{
        fontFamily: fonts.COMMON_REGULAR,
        fontSize: 16,
        color: 'rgba(255, 255, 255, 58%)',
        textAlign: 'center',
        letterSpacing: 2,
    }
});

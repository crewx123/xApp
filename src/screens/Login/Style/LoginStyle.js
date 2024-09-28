import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/Colors';
import { fonts } from '../../../theme/Fonts';

export const styles = StyleSheet.create({
    loginContainer: {
        height: '100%',
        backgroundColor: Colors.primary,
        gap: '550%',
    },
    logoContainer: {
        flex: 1,
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
    applicationName: {
        fontFamily: fonts.REGULAR,
        fontSize: 24.5,
    },
    buttonsMainContainer:{
        borderColor: '#fff',
        borderWidth: 2,
    },
    buttonsContainer: {
        gap: 16,
    },
    commonTextColor:{
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        color: 'rgba(255, 255, 255, 58%)',
        textAlign: 'center',
        letterSpacing: 2,
    }
});

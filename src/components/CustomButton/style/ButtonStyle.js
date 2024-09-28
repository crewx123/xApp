import { StyleSheet } from 'react-native';
import { fonts } from '../../../theme/Fonts';

export const Styles = StyleSheet.create({
    buttonContainer:{
        position: 'relative',
        margin: 'auto',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    btnNameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        padding: 12,
    },
    btnName: {
        fontFamily: fonts.REGULAR,
        fontSize: 20,
        letterSpacing: 2,
        color: 'black',
        textAlign: 'center',
    },
    iconContainer: {
        // position: 'absolute',
        // top: '42%',
        // left: '8%',
    }
});

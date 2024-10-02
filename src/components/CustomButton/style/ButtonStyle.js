import { StyleSheet } from 'react-native';
import { fonts } from '../../../theme/Fonts';

export const Styles = StyleSheet.create({
    buttonContainer:{
        position: 'relative',
        margin: 'auto',
        width: '100%',
        // borderRadius: 8,
    },
    btnNameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        padding: 12,
        // borderRadius: 8
    },
    btnName: {
        fontFamily: fonts.COMMON_REGULAR,
        fontSize: 20,
        letterSpacing: 1.5,
        color: 'black',
        textAlign: 'center',
    },
});

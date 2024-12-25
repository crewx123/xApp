import { StyleSheet } from 'react-native';
import { fonts } from '../../../theme/Fonts';

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
      },
      input: {
        fontFamily: fonts.COMMON_REGULAR,
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
      },
});

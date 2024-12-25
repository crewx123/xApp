import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'fixed',
        zIndex: 9999,
    },
    menuBarContainer: {
        background: 'translucent',
        paddingHorizontal: 8,
        paddingVertical: 12,
        // borderBottomColor: '#fff',
        // borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoNameContainer: {
        // borderColor: 'red',
        // borderWidth: 1,
        paddingLeft: 16,
    },
    menuIconsContainer: {
        // borderColor: '#fff',
        // borderWidth: 1,
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        fontSize: 21,
        fontWeight: '900',
        letterSpacing: 2,
        color: '#fff',
    },
    hamburgerButton: {
        // position: 'absolute',
        // top: 20,
        // right: 20,
    },
});

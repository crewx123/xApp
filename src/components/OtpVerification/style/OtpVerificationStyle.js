import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
      },
      input: {
        fontFamily: fonts.COMMON_REGULAR,
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#272728',
        textAlign: 'center',
        fontSize: 20,
      },
});
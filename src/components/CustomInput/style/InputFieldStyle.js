import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";

export const Styles = StyleSheet.create({
    eachInputLabel: {
      fontFamily: fonts.COMMON_REGULAR
    },  
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 5,
        // marginBottom: 20,
      },

      icon: {
        marginRight: 10,
      },

      input: {
        width: '100%',
        fontSize: 16,
        fontFamily: fonts.COMMON_REGULAR,
        textAlignVertical: 'center',
        overflow: 'scroll',
      },

      picker: {
        flex: 1,
        color: '#fff',
        fontFamily: fonts.COMMON_REGULAR,
      },

      showButton: {
        color: '#D80D5F',
        fontWeight: 'bold',
        paddingLeft: 10,
      },

      errors:{
        color: 'red',
        borderColor: '#fff',
        marginBottom: 20,
        fontFamily: fonts.COMMON_REGULAR,
      }
});
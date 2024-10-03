import { StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";

export const Styles = StyleSheet.create({
    eachInputLabel: {
        fontFamily: fonts.COMMON_REGULAR
    },  
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#272728',
        // borderWidth: 1,
        // borderColor: '#ccc',
        paddingHorizontal: 16, 
        borderRadius: 5,
        // marginBottom: 20,
      },

      icon: {
        marginRight: 10,
      },

      input: {
        flex: 1,
        fontSize: 16,
        fontFamily: fonts.COMMON_REGULAR
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
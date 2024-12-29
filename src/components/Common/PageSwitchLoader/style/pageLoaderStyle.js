import { StyleSheet } from "react-native";
import { fonts } from "../../../../theme/Fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    outerCircle: {
      position: 'absolute',
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4,
      borderWidth: 1,
      borderColor: '#000'
    },
    innerText: {
      fontSize: 16,
      fontFamily: fonts.COMMON_REGULAR,
      color: '#fff',
    },
    circularText: {
      fontSize: 14,
      fontFamily: fonts.REGULAR,
      color: '#000',
      textAlign: 'center',
    },
    circularCharacter: {
      width: 20, // Adjust based on character width
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
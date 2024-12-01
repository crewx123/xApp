import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    productListContainer: {
        flex: 1,
        position: 'relative',
    },
    eachProductImage: { 
        width: width, 
        height: height / 3.1 
    },
    showAllProductContainer: { 
        width: '100%', 
        flexDirection: 'row', 
        alignSelf: 'center', 
        padding: 16 
    }
});
import { StyleSheet } from "react-native";
import { fonts } from "../../../../theme/Fonts";

export const Styles = StyleSheet.create({
    CardImageContainer: {
        position: 'relative',
    },
    CardImage: {
        borderRadius: 12, 
    },
    addItemIcon:{
        position: 'absolute',
        bottom: 4,
        right: 8,
    },
    descriptionContainer: {
        flexDirection: 'column',
        marginBottom: 12
    }
});
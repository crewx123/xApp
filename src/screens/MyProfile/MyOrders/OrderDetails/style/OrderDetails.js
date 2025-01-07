import { StyleSheet } from "react-native";
import { fonts } from "../../../../../theme/Fonts";

export const Styles = StyleSheet.create({
    orderDetailsMainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    orderDetailsContainer: {
        flexDirection: 'column',
        gap: 16,
    },
    cartItemsContainer: {
        flexDirection: 'row',
        gap: 20,
        paddingBottom: 16, 
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(150, 150, 150, 0.9)'
    },
    productImage: {
        width: 105,
        height: 120,
        borderRadius: 5,
    },
    productInfoContainer: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },

    colorAndSizeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    commonText: {
        fontFamily: fonts.COMMON_REGULAR,
        color: '#000',
        fontSize: 14
    },
    orderIdContainer: {
        // flex: 1,
        flexDirection: 'row',
        gap: 4
    },
    addressDetailsContainer: {
        flexDirection: 'column',
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(150, 150, 150, 0.9)',
        paddingBottom: 16,
    },
    fromContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'start',
    },
    fromAddress: {
        flex: 1,
        flexDirection: 'column',
        gap: 4
    },
    itemsTrackingContainer: {
        flex: 1,
      },
      stepContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 20,
      },
      circleContainer: {
        alignItems: "center",
        marginRight: 10,
        position: "relative",
      },
      circle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
      },
      circleCompleted: {
        borderColor: "rgb(0, 200, 0)",
        backgroundColor: "rgb(0, 200, 0)",
      },
      circlePending: {
        borderColor: "#c4c4c4",
        backgroundColor: "#fff",
      },
      line: {
        width: 2,
        backgroundColor: "rgb(0, 200, 0)",
        position: "absolute",
        top: 16,
        left: 7,
      },
      textContainer: {
        flex: 1,
      },
      title: {
        // fontWeight: "bold",
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        marginBottom: 4,
        color: "#333",
      },
      description: {
        fontSize: 14,
        fontFamily: fonts.COMMON_REGULAR,
        color: "#666",
        marginBottom: 4,
      },
      dateTime: {
        fontSize: 12,
        color: "#999",
        fontFamily: fonts.COMMON_REGULAR
      },
})
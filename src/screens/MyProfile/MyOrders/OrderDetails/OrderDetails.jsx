import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, Animated } from 'react-native';
import { productImg } from '../../../../theme/Images';
import OctIcon from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwe from 'react-native-vector-icons/FontAwesome5';
import { Styles } from './style/OrderDetails';

const OrderDetails = () => {

    const progressSteps = [
        {
            title: "Order Confirmed",
            description: "Waiting for the order to be sent to the delivery service",
            date: "5 June",
            time: "12:41 PM",
        },
        {
            title: "Shipped",
            description: "Orders are being shipped to transit locations",
            date: "5 June",
            time: "3:54 PM",
        },
        {
            title: "Out for delivery",
            description: "The order has been given to your delivery agent",
            date: "6 June",
            time: "08:12 AM",
        },
        {
            title: "Delivered",
            description: "Your order has been delivered",
            date: "6 June",
            time: "10:34 AM",
        },
    ];

    const [currentStep, setCurrentStep] = useState(0); // Active step
    const lineAnimations = useRef(
        progressSteps.map(() => new Animated.Value(0)) // Animated values for all lines
    ).current;

    useEffect(() => {
        // Sequentially animate each line
        progressSteps.forEach((_, index) => {
            if (index < progressSteps.length - 2) {
                setTimeout(() => {
                    Animated.timing(lineAnimations[index], {
                        toValue: 60, // Full height of the line
                        duration: 500, // Animation duration
                        useNativeDriver: false,
                    }).start(() => {
                        if (index === currentStep) {
                            setCurrentStep((prev) => prev + 1); // Move to the next step after the animation
                        }
                    });
                }, index * 1000); // Delay each animation by 1 second
            }
        });
    }, []);

    return (
        <View style={Styles.orderDetailsMainContainer}>
            <ScrollView>
                <View style={Styles.orderDetailsContainer}>
                    <View style={Styles.cartItemsContainer}>
                        <View>
                            <Image source={productImg} style={Styles.productImage} resizeMode='cover' />
                        </View>
                        <View style={{ ...Styles.productInfoContainer, }}>
                            <View style={Styles.productInfoContainer}>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ ...Styles.commonText, fontSize: 16, wordBreak: 'break-word' }}>Polo Party Wear My Name is Prince Kumar</Text>
                                </View>
                                <View style={Styles.colorAndSizeContainer}>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(100, 100, 100, 0.9)' }}>Black</Text>
                                    <OctIcon name='dot-fill' size={9} color='rgba(100, 100, 100, 0.9)' />
                                    <Text style={{ ...Styles.commonText, color: 'rgba(100, 100, 100, 0.9)' }}>XXL</Text>
                                </View>
                                <View style={Styles.priceContainer}>
                                    <MaterialIcon name="currency-rupee" size={12} color="rgba(50, 50, 50, 1)" />
                                    <Text style={{ ...Styles.commonText, color: 'rgba(50, 50, 50, 1)' }}>500</Text>
                                </View>
                            </View>
                            <View style={Styles.orderIdContainer}>
                                <View>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(100, 100, 100, 0.9)' }}>Order ID:</Text>
                                </View>
                                <View>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(100, 100, 100, 0.9)' }}>17481HAFFJBC</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.addressDetailsContainer}>
                        <View style={Styles.fromContainer}>
                            <FontAwe name='map-marker-alt' size={23} color='rgba(50, 50, 50, 1)' />
                            <View style={Styles.fromAddress}>
                                <View>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(100, 100, 100, 0.9)' }}>From</Text>
                                </View>
                                <View>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(50, 50, 50, 1)' }}>672/A, Canterbury Model Public School, Main Road Vijay Park, Maujpur, North-East-Delhi, Delhi - 110053</Text>
                                </View>
                            </View>
                        </View>
                        {/* Send To Address Container */}
                        <View style={{ ...Styles.fromContainer, gap: 10 }}>
                            <MaterialCommunityIcon name='truck-delivery-outline' size={23} color='rgba(50, 50, 50, 1)' />
                            <View style={Styles.fromAddress}>
                                <View>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(100, 100, 100, 0.9)' }}>Send To</Text>
                                </View>
                                <View>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(50, 50, 50, 1)' }}>C-3, 4th Floor, Sector - 6, Noida, Uttar Pradesh, 201301</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ ...Styles.fromContainer, gap: 10 }}>
                            <Feather name='box' size={23} color='rgba(50, 50, 50, 1)' />
                            <View style={Styles.fromAddress}>
                                <View>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(100, 100, 100, 0.9)' }}>Weight</Text>
                                </View>
                                <View>
                                    <Text style={{ ...Styles.commonText, color: 'rgba(50, 50, 50, 1)' }}>3.5 Kg</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.itemsTrackingContainer}>
                        {progressSteps.map((step, index) => (
                            <View key={index} style={Styles.stepContainer}>
                                {/* Circle Indicator */}
                                <View style={Styles.circleContainer}>
                                    <View
                                        style={[
                                            Styles.circle,
                                            index <= currentStep ? Styles.circleCompleted : Styles.circlePending,
                                        ]}
                                    />
                                    {/* Animated Connecting Line */}
                                    {index < progressSteps.length - 1 && (
                                        <Animated.View
                                            style={[
                                                Styles.line,
                                                {
                                                    height: lineAnimations[index], // Animated height
                                                },
                                            ]}
                                        />
                                    )}
                                </View>

                                {/* Step Details */}
                                <View style={Styles.textContainer}>
                                    <Text style={Styles.title}>{step.title}</Text>
                                    <Text style={Styles.description}>{step.description}</Text>
                                    <Text style={Styles.dateTime}>
                                        {step.date} {step.time}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default OrderDetails;
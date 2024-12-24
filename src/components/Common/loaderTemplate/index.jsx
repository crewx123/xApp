/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { fonts } from '../../../theme/Fonts';

const LoaderTemplate = ({ colorList, boxWidth, boxHeight, loaderTitle = 'XPRICE', loaderTitleColor = '#fff', loaderTitleSize = 18 }) => {
    const colorAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;

    // Blinking animation
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(colorAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(colorAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [colorAnim]);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0.3,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [fadeAnim]);

    // Interpolations
    const backgroundColor = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: colorList,
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    {
                        width: boxWidth,
                        height: boxHeight,
                        backgroundColor: backgroundColor,
                    },
                ]}
            >
                <Animated.Text
                    style={
                        {
                            color: loaderTitleColor,
                            letterSpacing: 0.8,
                            fontFamily: fonts.COMMON_REGULAR,
                            fontSize: loaderTitleSize,
                            opacity: fadeAnim,
                        }
                    }
                >
                    {loaderTitle}
                </Animated.Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});

export default LoaderTemplate;

import React, { useEffect, useRef } from 'react';
import { View, Animated, Text } from 'react-native';
import { styles } from './style/pageLoaderStyle';

const CircularLoader = () => {
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 3000, // Duration for one full rotation
                useNativeDriver: true,
            })
        ).start();
    }, [rotation]);

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const createCircularText = () => {
        const radius = 75; // Radius of the circular path
        const text = 'XPRICE PRIVATE LIMITED '; // Text to display in a circular pattern
        const characters = text.split('');
        const angleStep = (2 * Math.PI) / characters.length; // Equal angular spacing

        return characters.map((char, index) => {
            const angle = index * angleStep - Math.PI / 2; // Offset to start from the top
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
                <View
                    key={index}
                    style={[
                        styles.circularCharacter,
                        {
                            position: 'absolute',
                            top: radius + y - 10, // Adjusted for text alignment
                            left: radius + x - 10, // Adjusted for text alignment
                            transform: [{ rotate: `${(angle * 180) / Math.PI}deg` }],
                        },
                    ]}
                >
                    <Text style={styles.circularText}>{char}</Text>
                </View>
            );
        });
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.outerCircle,
                    { transform: [{ rotate: rotateInterpolate }] },
                ]}
            >
                {createCircularText()}
            </Animated.View>

            {/* Inner Stationary Text */}
            <View style={styles.innerCircle}>
                <Text style={styles.innerText}>X-PRICE </Text>
            </View>
        </View>
    );
};

export default function App({ isLoading }) {

    if (!isLoading) {
        console.log(isLoading);
        return null;
    }

    return (
        <View style={styles.container}>
            <CircularLoader />
        </View>
    );
}

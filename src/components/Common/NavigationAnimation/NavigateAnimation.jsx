import React from 'react';
import Animated, { FadeIn, FadeOut, SlideInLeft, SlideInRight, ZoomIn, ZoomOut } from 'react-native-reanimated';

const NavigateAnime = ({ children }) => {
    return (
        <Animated.View
            entering={ZoomIn.duration(800)}
            exiting={ZoomOut.duration(800)}
            style={{ flex: 1, backgroundColor: '#fff' }}
        >
            {children}
        </Animated.View>
    )
}

export default NavigateAnime;
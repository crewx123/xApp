import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from './style/GradientTextStyle';

const GradientText = ({ text, textSize, gradientColor }) => {
    return (
        <MaskedView
            maskElement={
                <View style={Styles.maskContainer}>
                    <Text style={{ ...Styles.text, fontSize: textSize || 16 }}>{text}</Text>
                </View>
            }
        >
            <LinearGradient
                colors={gradientColor}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                useAngle={true}
                angle={45}
                angleCenter={{ x: 0.6, y: 0.3 }}
                style={Styles.gradient}
            />
        </MaskedView>
    )
}

export default GradientText;

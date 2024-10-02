import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Styles } from './style/ButtonStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({ name, btnNameColor, buttonBackgroundColor, IsDisplayIcon = false, iconName, iconColor, gradientColor }) => {
    return (
        <View style={{ ...Styles.buttonContainer, backgroundColor: buttonBackgroundColor || '#fff', }}>
            <Pressable
                onPress={() => {
                    console.log('Button pressed');
                }}
                android_ripple={{ color: 'rgba(255, 255, 255, 0.3)' }} // Ripple effect color
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.8 : 1, // Change opacity on press
                    },
                ]}
            >
                <LinearGradient
                    colors={gradientColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    useAngle={true}
                    angle={45}
                    angleCenter={{ x: 0.6, y: 0.3 }}
                    style={Styles.btnNameContainer}
                >
                    {IsDisplayIcon && <View style={Styles.iconContainer} >
                        <Text >
                            <Icon name={iconName} color={iconColor || '#000'} size={30} />
                        </Text>
                    </View>}
                    <View>
                        <Text style={{ ...Styles.btnName, color: btnNameColor || '#000' }}>
                            {name ? name : 'Submit'}
                        </Text>
                    </View>
                </LinearGradient>
            </Pressable>
        </View >
    )
}

export default Button;

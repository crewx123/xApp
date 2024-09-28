import React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import { Styles } from './style/ButtonStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ( { name, nameColor, buttonBackgroundColor, IsDisplayIcon = false, iconName, iconColor } ) => {
    return(
        <View style={{...Styles.buttonContainer, backgroundColor: buttonBackgroundColor || '#fff'}}>
            <TouchableNativeFeedback
                onPress={() => {
                    console.log('Button Clicked');
                }}
                background={TouchableNativeFeedback.Ripple('#3596A9', false)}
            >
                <View style={Styles.btnNameContainer}>
                    { IsDisplayIcon && <View style={Styles.iconContainer} >
                        <Text >
                            <Icon name={iconName} color={ iconColor || '#000'} size={30} />
                        </Text>
                    </View>}
                    <View>
                        <Text style={{...Styles.btnName, color: nameColor || '#000'}}>
                            {name ? name : 'Submit'}
                        </Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Button;

import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import { Styles } from './style/OtpVerificationStyle';

const VerificationScreen = ({ code, setCode }) => {
    //   const [code, setCode] = useState(['', '', '', '']); // For 4 digit input
    const inputs = useRef([]);

    const handleChange = (text, index) => {

        if (text.length === 1) {
            const newCode = [...code];
            newCode[index] = text;
            setCode(newCode);

            // Automatically focus the next input if available
            if (index < inputs.current.length - 1) {
                inputs.current[index + 1].focus();
            }
        }
        
        if (text.length === 0 && index > 0) {
            inputs.current[0].focus();
        }
    };

    const handleBackspace = (event, index) => {
        // On backspace, if the box is empty, move to the previous input
        if (event.nativeEvent.key === 'Backspace' && code[index] === '') {
            if (index > 0) {
                newCode = [...code];
                newCode[index - 1] = '';
                setCode(newCode);
                inputs.current[index - 1].focus();
            }
        }
        else if (code[index] !== '' && event.nativeEvent.key === 'Backspace') {
            newCode = [...code];
            newCode[index] = '';
            setCode(newCode);
            if (index > 0) {
                inputs.current[index - 1].focus();
            } else if (index === 0) {
                inputs.current[index].focus();
            }
        }
    };

    return (
        <View style={Styles.container}>
            {code.map((digit, index) => (
                <TextInput
                    key={index}
                    ref={(input) => {
                        inputs.current[index] = input
                    }}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(event) => handleBackspace(event, index)}
                    style={Styles.input}
                    maxLength={1}
                    keyboardType="number-pad"
                />
            ))}
        </View>
    );
};


export default VerificationScreen;

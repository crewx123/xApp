import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';

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
    };

    const handleBackspace = (event, index) => {
        // On backspace, if the box is empty, move to the previous input
        if (event.nativeEvent.key === 'Backspace' && code[index] === '') {
            if (index > 0) {
                inputs.current[index - 1].focus();
            }
        }
    };

    return (
        <View style={styles.container}>
            {code.map((digit, index) => (
                <TextInput
                    key={index}
                    ref={(input) => inputs.current[index] = input}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(event) => handleBackspace(event, index)}
                    style={styles.input}
                    maxLength={1}
                    keyboardType="number-pad"
                />
            ))}
        </View>
    );
};


export default VerificationScreen;

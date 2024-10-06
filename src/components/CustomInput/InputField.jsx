import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles } from './style/InputFieldStyle';

const InputField = ({ labelName, name, setName, inputType = 'default', iconColor, inputPlaceholder, iconName, maxInputSize = undefined, autoCapitalize = 'none', errorName = null, pickerList = [] }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View>
            <Text style={Styles.eachInputLabel}>{labelName}</Text>
            <View style={{ ...Styles.inputContainer, marginBottom: errorName ? 0 : 10, paddingRight: inputType === 'picker' ? 8 : 20 }}>
                <Icon name={iconName} size={20} color={iconColor} style={Styles.icon} />
                {
                    inputType === 'picker' ?
                        <Picker
                            selectedValue={name}
                            style={Styles.picker}
                            onValueChange={(itemValue) => setName(itemValue)}
                        >
                            {
                                pickerList.map((value, index) => (
                                    <Picker.Item key={index} label={value} value={value} />
                                ))
                            }
                        </Picker> : inputType !== 'password' ?
                            <TextInput
                                style={Styles.input}
                                placeholder={inputPlaceholder}
                                value={name}
                                onChangeText={setName}
                                keyboardType={inputType}
                                maxLength={maxInputSize}
                                autoCapitalize={autoCapitalize}
                            /> : <>
                                <TextInput
                                    style={Styles.input}
                                    placeholder="Password"
                                    value={name}
                                    onChangeText={setName}
                                    secureTextEntry={!isPasswordVisible}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility}>
                                    <Text style={Styles.showButton}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
                                </TouchableOpacity>
                            </>
                }
            </View>
            {errorName && <View><Text style={Styles.errors}>{errorName}</Text></View>}
        </View>
    )
}

export default InputField;
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles } from './style/InputFieldStyle';

const InputField = ({ labelName, labelNameColor, labelFontsize = 14, name, setName, textInputColor = '#fff', textInputPlaceHolderColor = '#fff', textInputBorderWidth = 0, textInputBorderColor = '', textInputFontSize = 16, textInputPaddingHorizontal = 16, inputType = 'default', iconColor, inputPlaceholder, textInputBackgroundColor = '', iconName, maxInputSize = undefined, autoCapitalize = 'none', errorName = null, pickerList = [], isRequired = false, multilineValue = false, numberOfLinesValue = 1, radioValues = [] }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', gap: 2 }}>
                <Text style={{ ...Styles.eachInputLabel, color: labelNameColor ? labelNameColor : '#fff', fontSize: labelFontsize }}>{labelName}</Text>
                {isRequired && <Text style={{ color: 'red' }}>*</Text>}
            </View>
            <View style={{ ...Styles.inputContainer, marginBottom: errorName ? 0 : 10, paddingRight: inputType === 'picker' ? 8 : 20, backgroundColor: textInputBackgroundColor ? textInputBackgroundColor : '#272728', borderWidth: textInputBorderWidth, borderColor: textInputBorderColor, paddingHorizontal: textInputPaddingHorizontal }}>
                <Icon name={iconName} size={20} color={iconColor} style={Styles.icon} />
                {
                    inputType === 'Radio' ?
                        <RadioButton.Group onValueChange={setName} value={name}>
                            <View style={{ marginLeft: -24, flexDirection: 'row', gap: 0, padding: 0 }}>
                                {
                                    radioValues.map((data, index) => (
                                        <RadioButton.Item key={index} label={data} value={data} />
                                    ))
                                }
                            </View>
                        </RadioButton.Group>
                        : inputType === 'picker' ?
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
                                    style={{ ...Styles.input, fontSize: textInputFontSize, color: textInputColor }}
                                    placeholder={inputPlaceholder}
                                    value={name}
                                    onChangeText={setName}
                                    keyboardType={inputType}
                                    maxLength={maxInputSize}
                                    autoCapitalize={autoCapitalize}
                                    placeholderTextColor={textInputPlaceHolderColor}
                                    multiline={multilineValue}
                                    numberOfLines={1}
                                /> :
                                <>
                                    <TextInput
                                        style={{ ...Styles.input, fontSize: textInputFontSize, color: textInputColor }}
                                        placeholder="Password"
                                        value={name}
                                        onChangeText={setName}
                                        secureTextEntry={!isPasswordVisible}
                                        placeholderTextColor={textInputPlaceHolderColor}
                                        multiline={multilineValue}
                                        numberOfLines={1}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', right: 16 }} onPress={togglePasswordVisibility}>
                                        <Text style={Styles.showButton}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
                                    </TouchableOpacity>
                                </>
                }
            </View>
            {errorName && <View><Text style={Styles.errors}>{errorName}</Text></View>}
        </View >
    )
}

export default InputField;
import React from 'react';
import { useState } from 'react';
import { Styles } from './Style/RegistrationStyle';
import CustomButton from '../../components/CustomButton/Button';
import CustomInputField from '../../components/CustomInput/InputField';
// import { Picker } from '@react-native-picker/picker';
import { SafeAreaView, View, Text } from 'react-native';


const Registration = () => {

    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({});


    const handleValidation = () => {
        let valid = true;
        let errors = {};

        if (!name) {
            errors.name = 'Name is required';
            valid = false;
        }

        if (!phoneNumber) {
            errors.phoneNumber = 'Mobile is required';
        }

        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            valid = false;
        }

        if (!password) {
            errors.password = 'Password is required';
            valid = false;
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };



    return (
        <SafeAreaView style={{ height: '100%' }}>
            <View style={Styles.registrationMainContainer}>
                <View style={Styles.newUserDesContainer}>
                    <View>
                        <Text style={{ ...Styles.textCommon, ...Styles.createAccount }}>Create an account</Text>
                    </View>
                    <View>
                        <Text style={{ ...Styles.greetings }}>Welcome! Please enter your details.</Text>
                    </View>
                </View>
                <View style={Styles.formContainer}>
                    <CustomInputField
                        labelName='Name'
                        name={name}
                        setName={setName}
                        iconName='person-outline'
                        iconColor='#666'
                        inputPlaceholder='Enter your name'
                        errorName={errors.name}
                    />

                    <CustomInputField
                        labelName='Email'
                        name={email}
                        setName={setEmail}
                        iconName='mail-outline'
                        iconColor='#666'
                        keyboardType='email-address'
                        inputPlaceholder='Enter your mail'
                        errorName={errors.email}
                    />

                    <CustomInputField
                        labelName='Mobile'
                        name={phoneNumber}
                        setName={setPhoneNumber}
                        iconName='call-outline'
                        inputType='phone-pad'
                        iconColor='#666'
                        inputPlaceholder='Enter your mobile'
                        maxInputSize={10}
                        errorName={errors.phoneNumber}
                    />

                    <CustomInputField
                        labelName='Password'
                        name={password}
                        setName={setPassword}
                        iconName='lock-closed-outline'
                        iconColor='#666'
                        inputType='password'
                        inputPlaceholder='Enter your password'
                        errorName={errors.password}
                    />

                    <CustomButton
                        gradientColor={gradientColors.gradient1}
                        name='Sign Up'
                        btnNameColor='#fff'
                        onPress={handleValidation}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Registration;


{/* <View>
    <Text>Gender</Text>
    <View style={{ ...Styles.inputContainer, paddingRight: 8 }}>
        <Icon name="male-female-outline" size={20} color="#666" style={Styles.icon} />
        <Picker
            selectedValue={gender}
            style={Styles.picker}
            onValueChange={(itemValue) => setGender(itemValue)}
        >
            <Picker.Item label="Select Gender" value="Select Gender" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
        </Picker>
    </View>
</View> */}
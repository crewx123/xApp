import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import CustomInputField from '../../components/CustomInput/InputField';
import CustomButton from '../../components/CustomButton/Button';
import CheckBox from '@react-native-community/checkbox';
import { Styles } from './Style/LoginFormStyle';


const LoginForm = () => {

    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    }

    // const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rememberIsChecked, setRememberIsChecked] = useState(true)
    const [errors, setErrors] = useState({});


    const handleValidation = () => {
        let valid = true;
        let errors = {};

        if (!phoneNumber) {
            errors.phoneNumber = 'Mobile is required';
        }

        // if (!email) {
        //     errors.email = 'Email is required';
        //     valid = false;
        // } else if (!/\S+@\S+\.\S+/.test(email)) {
        //     errors.email = 'Invalid email address';
        //     valid = false;
        // }

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
            <View style={Styles.loginFormMainContainer}>
                <View style={Styles.newUserDesContainer}>
                    <View>
                        <Text style={{ ...Styles.textCommon, ...Styles.createAccount }}>Sign In</Text>
                    </View>
                    <View>
                        <Text style={{ ...Styles.greetings }}>Please enter the login credentials</Text>
                    </View>
                </View>
                <View style={Styles.formContainer}>

                    {/* <CustomInputField
                        labelName='Email'
                        name={email}
                        setName={setEmail}
                        iconName='mail-outline'
                        iconColor='#666'
                        keyboardType='email-address'
                        inputPlaceholder='Enter your mail'
                        errorName={errors.email}
                    /> */}

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

                    <View style={Styles.loginAdditionalInfoContainer}>
                        <View style={Styles.checkAndForgotBtnContainer}>
                            <CheckBox
                                value={rememberIsChecked}
                                onValueChange={setRememberIsChecked}
                            />
                            <Text style={Styles.textCommon}>Remember me</Text>
                        </View>
                        <View>
                            <Text style={{ ...Styles.textCommon, color: '#D80D5F' }}>Forgot Password</Text>
                        </View>
                    </View>

                    <CustomButton
                        gradientColor={gradientColors.gradient2}
                        name='Sign In'
                        btnNameColor='#fff'
                        onPress={handleValidation}
                    />
                </View>
                <View style={{ flex: 1, paddingBottom: 10, }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={Styles.textCommon}>Don't have an account?</Text>
                            <Text style={{ ...Styles.textCommon, color: '#D80D5F' }}>Sign Up</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default LoginForm;
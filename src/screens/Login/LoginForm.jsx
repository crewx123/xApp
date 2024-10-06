import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import CustomInputField from '../../components/CustomInput/InputField';
import CustomButton from '../../components/CustomButton/Button';
import CheckBox from '@react-native-community/checkbox';
import { loginApi } from '../../utils/loginAPI';
import { Styles } from './Style/LoginFormStyle';


const LoginForm = ({ navigation }) => {

    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    };

    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberIsChecked, setRememberIsChecked] = useState(true)
    const [errors, setErrors] = useState({});


    const handleValidation = () => {
        let valid = true;
        let errors = {};

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
        }

        setErrors(errors);
        return valid;
    };

    const handleLoginOnClick = () => {
        if (handleValidation()) {
            const loginCredentials = { email, password };
            loginApi(setIsLoginLoading, loginCredentials, setErrors);
        }
    }

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
                        onPress={handleLoginOnClick}
                    />
                </View>
                <View style={{ flex: 1, paddingBottom: 20, }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={Styles.textCommon}>Don't have an account?</Text>
                            <Text style={{ ...Styles.textCommon, color: '#D80D5F' }} onPress={() => navigation.navigate('Register')}>Sign Up</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default LoginForm;
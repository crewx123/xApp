/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import CustomInputField from '../../components/CustomInput/InputField';
import CustomButton from '../../components/CustomButton/Button';
import CheckBox from '@react-native-community/checkbox';
// import { loginApi } from '../../utils/loginAPI';
import { Styles } from './Style/LoginFormStyle';
import { useAuth } from '../../context/Auth/Auth';


const LoginForm = ({ navigation }) => {
    const { userLoginApi } = useAuth();
    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    };

    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [email, setEmail] = useState('shiv143ak@gmail.com');
    const [password, setPassword] = useState('@K143Solar');
    const [rememberIsChecked, setRememberIsChecked] = useState(true);
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
    console.log(email, password);
        if (handleValidation()) {
            const loginCredentials = { email, password };
            userLoginApi(setIsLoginLoading, loginCredentials, setErrors);
        }
    };

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />
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
                        labelName="Email"
                        name={email}
                        setName={setEmail}
                        iconName="mail-outline"
                        iconColor="#666"
                        keyboardType="email-address"
                        inputPlaceholder="Enter your mail"
                        errorName={errors.email}
                    />

                    <CustomInputField
                        labelName="Password"
                        name={password}
                        setName={setPassword}
                        iconName="lock-closed-outline"
                        iconColor="#666"
                        inputType="password"
                        inputPlaceholder="Enter your password"
                        errorName={errors.password}
                    />

                    <View style={Styles.loginAdditionalInfoContainer}>
                        <View style={Styles.checkAndForgotBtnContainer}>
                            <CheckBox
                                value={rememberIsChecked}
                                onValueChange={setRememberIsChecked}
                                tintColors={{
                                    true: '#4CAF50', // Color when checked
                                    false: 'royalblue', // Color when unchecked (border color)
                                }}
                            />
                            <Text style={Styles.textCommon}>Remember me</Text>
                        </View>
                        <View>
                            <Text style={{ ...Styles.textCommon, color: '#D80D5F' }}>Forgot Password?</Text>
                        </View>
                    </View>

                    <CustomButton
                        gradientColor={gradientColors.gradient2}
                        name="Sign In"
                        btnNameColor="#fff"
                        onPress={handleLoginOnClick}
                        isLoading={isLoginLoading}
                    />
                </View>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={Styles.textCommon}>Don't have an account?</Text>
                            <Text style={{ ...Styles.textCommon, color: '#D80D5F' }} onPress={() => navigation.navigate('Register')}>Sign Up</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
};

export default LoginForm;

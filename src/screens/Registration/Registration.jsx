import React from 'react';
import { useState } from 'react';
import { Styles } from './Style/RegistrationStyle';
import CustomButton from '../../components/CustomButton/Button';
import CustomInputField from '../../components/CustomInput/InputField';
import { SafeAreaView, View, Text } from 'react-native';
import { registerApi } from '../../utils/registerAPI';


const Registration = () => {

    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    }

    const [isLoading, setIsLoading] = useState(false);
    const [submitRegisterClicked, setSubmitRegisterClicked] = useState(false);

    const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('Male');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState({});
    const pickerList = ['Male', 'Female', 'Others'];


    const handleValidation = () => {
        let valid = true;
        let errors = {};

        if (!fullName) {
            errors.fullName = 'Name is required';
            valid = false;
        }

        if (!mobile) {
            errors.mobile = 'Mobile is required';
        }

        if (!gender) {
            errors.gender = 'Gender is Required';
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

    const handleOnSubmitRegisterForm = () => {
        setSubmitRegisterClicked(true);
        console.log(handleValidation());
        if (handleValidation()) {
            const sendData = { fullName, mobile, gender, password };
            console.log(sendData);
            registerApi(setIsLoading, sendData, setErrors);
        }
    }

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
                        name={fullName}
                        setName={setFullName}
                        iconName='person-outline'
                        iconColor='#666'
                        inputPlaceholder='Enter your name'
                        errorName={errors.fullName}
                    />

                    <CustomInputField
                        labelName='Gender'
                        name={gender}
                        setName={setGender}
                        iconName='male-female-outline'
                        iconColor='#666'
                        inputType='picker'
                        inputPlaceholder='Select your gender'
                        pickerList={pickerList}
                        errorName={errors.gender}
                    />

                    {/* <CustomInputField
                        labelName='Email'
                        name={email}
                        setName={setEmail}
                        iconName='mail-outline'
                        iconColor='#666'
                        inputType='email-address'
                        inputPlaceholder='Enter your mail'
                        errorName={errors.email}
                    /> */}

                    <CustomInputField
                        labelName='Mobile'
                        name={mobile}
                        setName={setMobile}
                        iconName='call-outline'
                        inputType='phone-pad'
                        iconColor='#666'
                        inputPlaceholder='Enter your mobile'
                        maxInputSize={10}
                        errorName={errors.mobile}
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
                        gradientColor={gradientColors.gradient2}
                        name='Sign Up'
                        btnNameColor='#fff'
                        onPress={handleOnSubmitRegisterForm}
                    />
                </View>
                {submitRegisterClicked && errors.length !== 0 && <View><Text>{errors.status}</Text></View>}
            </View>
        </SafeAreaView>
    )
}

export default Registration;

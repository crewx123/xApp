/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useState } from 'react';
import { Styles } from './Style/RegistrationStyle';
import CustomButton from '../../components/CustomButton/Button';
import CustomInputField from '../../components/CustomInput/InputField';
import EmailVerificationPage from '../../screens/ForgotPassword/ForgotPassword';
import OtpVerificationPage from '../../screens/EmailVerification/EmailVerification';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { registerApi } from '../../utils/registerAPI';
import { sendOTP_Api } from '../../utils/sendOtpAPI';
import { showAddressApi } from '../../utils/showAddressAPI';
import { storeToken } from '../../utils/token';
import { useAuth } from '../../context/Auth/Auth';
import NavigateAnime from '../../components/Common/NavigationAnimation/NavigateAnimation';


const Registration = ({ navigation }) => {

    const { userInformation, setUserInformation } = useAuth();
    const { ipAddress } = userInformation;

    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    };

    const subHeadingContent = 'Enter your email id for the verification of your email';

    const [isLoading, setIsLoading] = useState(false);
    const [otpVerificationProcess, setOtpVerificationProcess] = useState({
        isEmailVerified: false,
        isOtpSent: false,
    });
    const [submitRegisterClicked, setSubmitRegisterClicked] = useState(false);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('Male');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState({});
    const [otp, setOtp] = useState(['', '', '', '']);
    const pickerList = ['Male', 'Female', 'Others'];

    const handleEmailValidation = () => {
        let errors = {};
        let valid = true;
        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            valid = false;
        }
        setErrors(errors);
        return valid;
    };


    const handleEmailVerification = () => {
        if (handleEmailValidation()) {
            sendOTP_Api(setIsLoading, email, setErrors, ipAddress).then((status) => {
                console.log(status);
                if (status) {
                    setOtpVerificationProcess((previous) => ({ ...previous, isEmailVerified: false, isOtpSent: true }));
                }
            });
        }
    };

    const handleValidation = () => {
        let valid = true;
        let errors = {};

        if (!fullName) {
            errors.fullName = 'Name is required';
            valid = false;
        }

        if (!mobile) {
            errors.mobile = 'Mobile is required';
            valid = false;
        }

        if (!gender) {
            errors.gender = 'Gender is Required';
            valid = false;
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

    const handleOnSubmitRegisterForm = () => {
        setSubmitRegisterClicked(true);
        console.log(handleValidation());
        if (handleValidation()) {
            const sendData = { fullName, mobile, email, gender, password };
            console.log(sendData);
            registerApi(setIsLoading, sendData, setErrors, ipAddress).then((response) => {
                if (response) {
                    const { refreshToken } = response;
                    storeToken('token', refreshToken);
                    storeToken('userProfileData', JSON.stringify(response.userData));
                    setUserInformation((prev) => ({ ...prev, ...response.userData }));
                    storeToken('userAddressInfo', JSON.stringify([]));
                    setUserInformation((prev) => ({ ...prev, userAddressInfo: [] }));
                    navigation.navigate('Dashboard');
                }
            });
        }
    };

    return (
        <NavigateAnime>

            <SafeAreaView style={{ height: '100%' }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />
                {!otpVerificationProcess.isOtpSent &&
                    <EmailVerificationPage
                        heading="Email Verification"
                        subHeading={subHeadingContent}
                        value={email}
                        setValue={setEmail}
                        buttonColor={gradientColors.gradient2}
                        errorName={errors?.email}
                        onPress={handleEmailVerification}
                        isLoading={isLoading}
                    />
                }
                {
                    otpVerificationProcess.isOtpSent && !otpVerificationProcess.isEmailVerified &&
                    <OtpVerificationPage
                        email={email}
                        otp={otp}
                        setOtp={setOtp}
                        setOtpVerificationStatus={setOtpVerificationProcess}
                    />
                }

                {otpVerificationProcess.isEmailVerified && <View style={Styles.registrationMainContainer}>
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
                            labelName="Name"
                            name={fullName}
                            setName={setFullName}
                            iconName="person-outline"
                            iconColor="#666"
                            inputPlaceholder="Enter your name"
                            errorName={errors.fullName}
                        />

                        <CustomInputField
                            labelName="Email"
                            name={email}
                            setName={setEmail}
                            iconName="mail-outline"
                            iconColor="#666"
                            inputType="email-address"
                            inputPlaceholder="Enter your mail"
                            errorName={errors.email}
                        />

                        <CustomInputField
                            labelName="Mobile"
                            name={mobile}
                            setName={setMobile}
                            iconName="call-outline"
                            inputType="phone-pad"
                            iconColor="#666"
                            inputPlaceholder="Enter your mobile"
                            maxInputSize={10}
                            errorName={errors.mobile}
                        />

                        <CustomInputField
                            labelName="Gender"
                            name={gender}
                            setName={setGender}
                            iconName="male-female-outline"
                            iconColor="#666"
                            inputType="picker"
                            inputPlaceholder="Select your gender"
                            pickerList={pickerList}
                            errorName={errors.gender}
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

                        <CustomButton
                            gradientColor={gradientColors.gradient2}
                            name="Sign Up"
                            btnNameColor="#fff"
                            onPress={handleOnSubmitRegisterForm}
                        />
                    </View>
                    {submitRegisterClicked && errors.length !== 0 && <View><Text style={{ color: 'red', fontStyle: 'italic' }}>{errors.status}</Text></View>}
                </View>}
            </SafeAreaView>
        </NavigateAnime>
    );
};

export default Registration;

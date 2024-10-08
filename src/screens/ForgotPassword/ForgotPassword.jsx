import React from 'react';
import { Styles } from './style/ForgotPasswordStyle';
import CustomInputField from '../../components/CustomInput/InputField';
import CustomButton from '../../components/CustomButton/Button';
import { SafeAreaView, View, Text } from 'react-native';


const ForgotPassword = ({ heading, subHeading, value, setValue, errorName, buttonColor, onPress = null }) => {

    // const gradientColors = {
    //     gradient1: ['#3596A9', '#379E8D'],
    //     gradient2: ['#D56736', '#D80D5F'],
    // }
    // const [email, setEmail] = useState('');
    // const [errors, setErrors] = useState('');
    // const handleValidation = () => {
    //     let valid = true;
    //     let errors = {};

    //     if (!email) {
    //         errors.email = 'Email is required';
    //         valid = false;
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //         errors.email = 'Invalid email address';
    //         valid = false;
    //     }

    //     setErrors(errors);
    //     return valid;
    // }

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <View style={Styles.forgotPassMainContainer}>
                <View style={Styles.forgotPassDesContainer}>
                    <View>
                        <Text style={{ ...Styles.forgotPassHeading, ...Styles.commonTextFont }}>{heading || 'Enter your heading'}</Text>
                    </View>
                    <View>
                        <Text style={{ ...Styles.forgotPassInfo, ...Styles.commonTextFont }}>
                            {subHeading || "Enter the email associated with your account and we'll send an email instruction to reset your password"}
                        </Text>
                    </View>
                </View>
                <View style={Styles.formContainer}>
                    <View>
                        <CustomInputField
                            labelName='Email'
                            name={value}
                            setName={setValue}
                            iconName='mail-outline'
                            iconColor='#666'
                            keyboardType='email-address'
                            inputPlaceholder='Enter your mail'
                            errorName={errorName}
                        />
                    </View>
                    <View>
                        <CustomButton
                            gradientColor={buttonColor}
                            name='Verify Email'
                            btnNameColor='#fff'
                            onPress={onPress}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword;
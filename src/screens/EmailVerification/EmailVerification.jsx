import React from 'react';
import { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import CustomButton from '../../components/CustomButton/Button';
import OtpVerification from '../../components/OtpVerification/OtpVerification';
import { Styles } from './style/EmailVerificationStyle';
// import GradientText from '../../components/GradientText/GradientText';

const EmailVerification = () => {

    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    }

    const [otp, setOtp] = useState(['', '', '', '']);
    const [errors, setErrors] = useState('');

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <View style={Styles.emailVeriMainContainer}>
                <View style={Styles.emailVeriDesContainer}>
                    <View>
                        <Text style={{ ...Styles.forgotPassHeading, ...Styles.commonTextFont }}>Verification</Text>
                    </View>
                    <View>
                        <Text style={{ ...Styles.forgotPassInfo, ...Styles.commonTextFont }}>
                            Enter the 4 digit code that you received on your email.
                        </Text>
                    </View>
                </View>
                <View style={Styles.formContainer}>
                    <View style={{ gap: 20, }}>
                        <OtpVerification
                            code={otp}
                            setCode={setOtp}
                        />
                        <View style={Styles.resendOtpTextContainer}>
                            <Text style={Styles.commonTextFont}>Didn't receive the OTP?</Text>
                            <Text style={{ ...Styles.commonTextFont, ...Styles.resendOtpText }}>Resend OTP</Text>
                        </View>
                    </View>
                    <View>
                        <CustomButton
                            gradientColor={gradientColors.gradient2}
                            name='Verify email'
                            btnNameColor='#fff'
                            onPress={null}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EmailVerification;
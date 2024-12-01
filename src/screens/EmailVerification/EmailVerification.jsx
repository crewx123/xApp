import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import CustomButton from '../../components/CustomButton/Button';
import OtpVerification from '../../components/OtpVerification/OtpVerification';
import { verifyOTP_Api } from '../../utils/verifyOtpAPI';
import { Styles } from './style/EmailVerificationStyle';
// import GradientText from '../../components/GradientText/GradientText';

const EmailVerification = ({ email, otp, setOtp, setOtpVerificationStatus }) => {

    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    }

    const [timeCountDown, setTimeCountDown] = useState(59);

    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setTimeCountDown((previous) => previous > 0 ? previous - 1 : previous);
        }, 1000);

        return () => {
            clearInterval(IntervalId);
        }
    }, []);

    const handleVerifyOtp = () => {
        verifyOTP_Api(setIsLoading, email, otp, setErrors).then((status) => {
            if (status) {
                console.log('hello');
                setOtpVerificationStatus((prev) => ({ ...prev, isEmailVerified: true }))
            }
        });
    }

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
                    <View style={{ gap: 20 }}>
                        <OtpVerification
                            code={otp}
                            setCode={setOtp}
                        />
                        <View style={Styles.resendOtpTextContainer}>
                            <Text style={Styles.commonTextFont}>Didn't receive the OTP?</Text>
                            <Text style={{ ...Styles.commonTextFont, ...Styles.resendOtpText, fontStyle: 'italic' }} onPress={() => { if (timeCountDown === 0) { console.log('succesfull'); setTimeCountDown(59); } }}>Resend</Text>
                            <Text>OTP in</Text>
                            <Text style={{ color: '#fff', fontStyle: 'italic' }}>{timeCountDown >= 10 ? timeCountDown : `0${timeCountDown}`} Seconds</Text>
                        </View>
                    </View>
                    <View>
                        <CustomButton
                            gradientColor={gradientColors.gradient2}
                            name='Verify email'
                            btnNameColor='#fff'
                            onPress={handleVerifyOtp}
                            isLoading={isLoading}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EmailVerification;
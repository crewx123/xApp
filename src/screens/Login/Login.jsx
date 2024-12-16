import React from 'react';
import { useEffect } from 'react';
import { appLogo } from '../../theme/Images';
import CustomButton from '../../components/CustomButton/Button';
import { styles } from './Style/LoginStyle';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useAuth } from '../../context/Auth/Auth';

import {
    SafeAreaView,
    Image,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native';


const Login = ({ navigation }) => {
    const { setUserInformation } = useAuth();
    useEffect(() => {
        async function checkToken() {
            const token = await EncryptedStorage.getItem("token");
            if (token) {
                const userDataInfo = await EncryptedStorage.getItem('userProfileData');
                const userAddressInfo = await EncryptedStorage.getItem('userAddressInfo')
                console.log("userData: ", { ...JSON.parse(userAddressInfo) });
                setUserInformation((prev) => ({ ...prev, ...JSON.parse(userDataInfo) }));
                setUserInformation((prev) => ({ ...prev, userAddressInfo: JSON.parse(userAddressInfo) }));
                navigation.replace("Dashboard"); // Go to Home Screen 
            } else {
                console.log('token not found');
            }
        }
        checkToken();
    }, []);

    const gradientColors = {
        gradient1: ['#3596A9', '#379E8D'],
        gradient2: ['#D56736', '#D80D5F'],
    }

    const handleOnPressSignIn = () => {
        navigation.navigate('LoginForm');
    }

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={'#161D23'}
            />
            <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                    <Image source={appLogo} style={styles.logo} resizeMode="contain" />
                    {/* <EcomLogo width={100} height={100} /> */}
                    <Text style={styles.applicationName}>App Name</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.bottomContainer}>
                        <View style={{ paddingBottom: 24 }}>
                            <Text style={styles.commonTextColor}>Login to Your Account</Text>
                        </View>
                        <View style={styles.buttonsMainContainer}>
                            <View style={styles.buttonsContainer}>
                                <CustomButton name="SIGN IN"
                                    btnNameColor='#fff'
                                    gradientColor={gradientColors.gradient1}
                                    onPress={handleOnPressSignIn}
                                />
                                <CustomButton
                                    gradientColor={gradientColors.gradient2}
                                    IsDisplayIcon={true}
                                    iconName="google"
                                    iconColor='#fff'
                                    name="Continue With Google"
                                    btnNameColor='#fff'
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingBottom: 20 }}>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.commonTextColor}>Don't have an account?</Text>
                        <Text style={{ ...styles.commonTextColor, color: '#D80D5F' }} onPress={() => navigation.navigate('Register')}>Sign Up</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
};
export default Login;

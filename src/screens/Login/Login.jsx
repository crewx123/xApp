import React from 'react';
import { appLogo } from '../../theme/Images';
import CustomButton from '../../components/CustomButton/Button';
import { styles } from './Style/LoginStyle';

import {
    SafeAreaView,
    Image,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native';


const Login = ({ appName }) => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                    <Image source={appLogo} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.applicationName}>{appName}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.bottomContainer}>
                        <View style={{ paddingBottom: 24, }}>
                            <Text style={styles.commonTextColor}>Login to Your Account</Text>
                        </View>
                        <View style={styles.buttonsMainContainer}>
                            <View style={styles.buttonsContainer}>
                                <CustomButton name="SIGN IN" />
                                <CustomButton IsDisplayIcon={true} iconName="google" name="Continue With Google" />
                            </View>
                            <View style={{ paddingBottom: 16 }}>
                                <Text style={styles.commonTextColor}>Don't have an account ?</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
};
export default Login;

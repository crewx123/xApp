import React, { useContext } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useState } from 'react';
import { loginApi } from '../../utils/loginAPI';
import { logoutApi } from '../../utils/logoutAPI';
import { removeToken } from '../../utils/token';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [userInformation, setUserInformation] = useState({
        ipAddress: '192.168.255.56:8080'
    });
    const navigationRef = useNavigationContainerRef();

    const userLoginApi = (setLoader, loginCredentials, setErrors) => {
        loginApi(setLoader, loginCredentials, setErrors, setUserInformation).then((status) => {
            if (status) {
                console.log(status);
                navigationRef.navigate('Dashboard');
            }
        });
    }

    const userLogoutApi = () => {
        logoutApi().then((status) => {
            if (status) {
                removeToken();
                navigationRef.navigate('Login Welcome');
            }
        });
    }

    const value = { userInformation, setUserInformation, userLoginApi, userLogoutApi }

    return (
        <AuthContext.Provider value={value}>
            <NavigationContainer ref={navigationRef}>
                {children}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
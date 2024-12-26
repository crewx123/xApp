import React, { useContext } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useState } from 'react';
import { loginApi } from '../../utils/loginAPI';
import { showAddressApi } from '../../utils/showAddressAPI';
import { storeToken } from '../../utils/token';
import { logoutApi } from '../../utils/logoutAPI';
import { removeToken } from '../../utils/token';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAddressLoading, setIsAddressLoading] = useState(false);
    const [userInformation, setUserInformation] = useState({
        ipAddress: '192.168.142.56:8080',
    });

    const navigationRef = useNavigationContainerRef();

    const userLoginApi = (setLoader, loginCredentials, setErrors) => {
        loginApi(setLoader, loginCredentials, setErrors, setUserInformation, userInformation.ipAddress).then((status) => {
            if (status) {
                showAddressApi(setIsAddressLoading, userInformation.ipAddress).then((result) => {
                    if (result) {
                        console.log(result);
                        storeToken('userAddressInfo', JSON.stringify(result));
                        setUserInformation((prev) => ({ ...prev, userAddressInfo: result }));
                        navigationRef.navigate('Dashboard');
                    }
                });
            }
        });
    };

    const userLogoutApi = () => {
        logoutApi(userInformation.ipAddress).then((status) => {
            if (status) {
                removeToken();
                navigationRef.navigate('Login Welcome');
            }
        });
    };

    const value = { userInformation, setUserInformation, userLoginApi, userLogoutApi };

    return (
        <AuthContext.Provider value={value}>
            <NavigationContainer ref={navigationRef}>
                {children}
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

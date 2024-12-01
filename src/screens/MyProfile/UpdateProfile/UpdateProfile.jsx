import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native';
import CustomInput from '../../../components/CustomInput/InputField';
import CustomButton from '../../../components/CustomButton/Button';
import { femaleAvatar } from '../../../theme/Images';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Styles } from './style/UpdateProfileStyle';
import { useAuth } from '../../../context/Auth/Auth';

const UpdateProfile = ({ navigation }) => {
    const { userInformation } = useAuth();
    const { fullName, email, mobile, gender, e_verify, m_verify } = userInformation;
    const [updateProfileDataInfo, setUpdateProfileDataInfo] = useState({
        fullName,
        email,
        mobile,
        gender,
        e_verify,
        m_verify
    });
    return (
        <SafeAreaView style={Styles.myProfileMainContainer}>
            <StatusBar
                backgroundColor='#fff'
                barStyle="dark-content"
            />
            <View style={Styles.myPorfileHeadingContainer}>
                <TouchableOpacity style={Styles.backBtnContainer}
                    onPress={() => {
                        if (navigation.canGoBack()) {
                            navigation.goBack();
                        }
                    }}
                >
                    <AntIcon
                        name='left'
                        color='#000'
                        size={26}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={Styles.commonTextStyle}>Edit Profile</Text>
                </View>
            </View>
            <ScrollView
                style={Styles.scrollViewContainer}
                showsVerticalScrollIndicator={false}

            >
                <View>
                    <View style={Styles.avatarImageContainer}>
                        <View style={{ ...Styles.avatarImageContainer, alignItems: 'center', width: 175, height: 175, borderRadius: 100, borderWidth: 0.5, borderColor: '#000' }}>
                            <Image source={femaleAvatar} resizeMode='contain' style={{ width: 150, height: 130 }} />
                        </View>
                    </View>
                    <View style={Styles.inputContainer}>
                        <CustomInput
                            labelName='Name'
                            labelNameColor='#000'
                            labelFontsize={18}
                            textInputBackgroundColor='#fff'
                            textInputBorderWidth={0.5}
                            textInputBorderColor='#000'
                            textInputPaddingHorizontal={4}
                            inputPlaceholder='Enter your name'
                            textInputPlaceHolderColor='#000'
                            textInputColor='#000'
                        />
                        <CustomInput
                            labelName='Mobile'
                            labelNameColor='#000'
                            labelFontsize={18}
                            textInputBackgroundColor='#fff'
                            inputType='phone-pad'
                            textInputBorderWidth={0.5}
                            textInputBorderColor='#000'
                            textInputPaddingHorizontal={4}
                            inputPlaceholder='Enter your mobile'
                            textInputPlaceHolderColor='#000'
                        />
                        <CustomInput
                            labelName='Email'
                            labelNameColor='#000'
                            labelFontsize={18}
                            inputType='email-address'
                            textInputBackgroundColor='#fff'
                            textInputBorderWidth={0.5}
                            textInputBorderColor='#000'
                            textInputPaddingHorizontal={4}
                            inputPlaceholder='Enter your email'
                            textInputPlaceHolderColor='#000'
                            textInputColor='#000'
                        />
                        <CustomInput
                            labelName='DOB'
                            labelNameColor='#000'
                            labelFontsize={18}
                            textInputBackgroundColor='#fff'
                            textInputBorderWidth={0.5}
                            textInputBorderColor='#000'
                            inputPlaceholder='YYYY-MM-DD'
                            textInputPlaceHolderColor='#000'
                            textInputPaddingHorizontal={4}
                            textInputColor='#fff'
                        />

                        <CustomButton
                            name='Save Changes'
                            btnNameColor='#fff'
                            gradientColor={['#238', '#000']}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UpdateProfile;
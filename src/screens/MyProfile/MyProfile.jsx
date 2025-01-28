/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import Share from 'react-native-share';
// import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, SectionList, Image, Share } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import OctIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Styles } from './style/MyProfileStyle';
import { maleAvatar, femaleAvatar } from '../../theme/Images';
// import { myProfileApi } from '../../utils/myProfileAPI';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/Auth/Auth';

const MyProfile = ({ navigation }) => {
    const { userInformation, userLogoutApi } = useAuth();
    // const [myProfileData, setMyProfileData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    const onPressEditProfile = () => {
        navigation.navigate('UpdateProfile');
    };

    const onPressAddress = () => {
        navigation.navigate('Address');
    };

    const onPressOrders = () => {
        navigation.navigate('Orders');
    };

    const onPressPrivacy = () => {
        navigation.navigate('policy');
    }

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Check out this amazing app! https://example.com',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Shared with specific activity
                    console.log('Shared via:', result.activityType);
                } else {
                    // Shared successfully
                    console.log('Share successful');
                }
            } else if (result.action === Share.dismissedAction) {
                // Dismissed
                console.log('Share dismissed');
            }
        } catch (error) {
            console.error('Error sharing content:', error.message);
        }
    };

    const profileMenuList = [
        {
            heading: 'Your Information',
            subMenuList: [['Edit Profile', 'user-edit', onPressEditProfile], ['Your Orders', 'box-open', onPressOrders], ['Notification', 'bell', null], ['Address', 'map-marker-alt', onPressAddress], ['GST Details', 'form', null]],
        },
        {
            heading: 'Other Information',
            subMenuList: [['About us', 'info', null], ['Share the app', 'sharealt', handleShare], ['Help & Support', 'question-circle', null], ['Terms and Policies', 'exclamation-circle', onPressPrivacy]],
        },
        {
            heading: 'Actions',
            subMenuList: [['Report a Problem', 'flag', null], ['Deactivate Account', 'blocked', null], ['Log out', 'logout', userLogoutApi]],
        },
    ];

    const gradientColor = ['#248', '#000'];

    // useEffect(() => {
    //     myProfileApi(setMyProfileData, setIsLoading);
    // }, []);

    const renderSubMenuItemsList = ({ item }) => (
        <View style={{ paddingVertical: 4, paddingHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ width: '100%', flexDirection: 'row', alignItems: 'center', gap: 16 }}
                    onPress={item[2]}
                >
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, backgroundColor: 'rgba(220, 220, 220, 1)', borderRadius: 50 }}
                    >
                        {
                            item[1] === 'blocked' ?
                                <OctIcon name={item[1]} color="rgb(80, 80, 80)" size={12} /> :
                                (item[1] === 'logout' || item[1] === 'form' || item[1] === 'infocircleo' || item[1] === 'sharealt') ? <AntIcon name={item[1]} color="rgb(80, 80, 80)" size={12} /> :
                                    <FontAwesomeIcon name={item[1]} color="rgb(80, 80, 80)" size={12} />
                        }
                    </TouchableOpacity>
                    <View>
                        <Text style={{ ...Styles.commonTextStyle, fontSize: 14 }}>{item[0]}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={Styles.myProfileMainContainer}>

            <StatusBar
                translucent={false}
                backgroundColor="#fff"
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
                        name="left"
                        color="#000"
                        size={26}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={Styles.commonTextStyle}>Settings</Text>
                </View>
            </View>

            <View style={{ width: '100%', paddingVertical: 16 }}>
                <LinearGradient
                    colors={gradientColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    useAngle={true}
                    angle={45}
                    angleCenter={{ x: 0.6, y: 0.3 }}
                    style={{ padding: 16, borderRadius: 8 }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 16 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 75, height: 75, borderRadius: 100, backgroundColor: '#fff' }}>
                            <Image source={userInformation.gender === 'male' ? maleAvatar : femaleAvatar} style={{ width: 54, height: 54 }} resizeMode="cover" />
                        </View>
                        <View style={{ flexDirection: 'column', paddingVertical: 12 }}>
                            <View>
                                <View style={{ flexDirection: 'row', gap: 4 }}>
                                    <Text style={{ ...Styles.commonTextStyle, fontSize: 18, color: '#fff' }}>{userInformation.fullName}</Text>
                                    {userInformation.e_verify && <MaterialIcon name="verified" color="rgb(0, 220, 0)" />}
                                </View>

                                <Text style={{ ...Styles.commonTextStyle, fontSize: 12, color: '#fff' }}>{userInformation.mobile}</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <SectionList
                sections={profileMenuList.map(({ heading, subMenuList }) => ({
                    heading,
                    data: subMenuList,
                }))}
                keyExtractor={(item, index) => item[0] + index}
                renderSectionHeader={({ section: { heading } }) => (
                    <View style={{ paddingHorizontal: 12, marginBottom: 8, marginTop: 12 }}>
                        <Text style={{ ...Styles.commonTextStyle, fontSize: 19 }}>{heading}</Text>
                    </View>
                )}
                renderItem={renderSubMenuItemsList}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView >
    );
};

export default MyProfile;

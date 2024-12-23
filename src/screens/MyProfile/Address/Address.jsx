/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, ToastAndroid } from 'react-native';
import { useAuth } from '../../../context/Auth/Auth';
import { showAddressApi } from '../../../utils/showAddressAPI';
import { storeToken } from '../../../utils/token';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { deleteAddressApi } from '../../../utils/deleteAddressAPI';
import { Styles } from './style/AddressStyle';
import LinearGradient from 'react-native-linear-gradient';

const Address = ({ navigation }) => {

    const { userInformation, setUserInformation } = useAuth();
    // console.log(userInformation.userAddressInfo);
    const [savedAddresses, setSavedAddresses] = useState(userInformation.userAddressInfo);

    useEffect(() => {
        setSavedAddresses(userInformation.userAddressInfo);
    }, [userInformation]);

    const [isLoading, setIsLoading] = useState(false);

    const onClickEditAddressBtn = (index, _id) => {
        // setEditAddressBtnClickedIndex((prev) => ({ ...prev, btnClicked: true, btnClickedIndex: index }));
        navigation.navigate('NewAddress', { data: { addressId: _id, ...savedAddresses[index] } });
    };

    const onPressAddNewAddress = () => {
        navigation.navigate('NewAddress', { data: null });
    };

    const onPressDeleteAddressBtn = (_id) => {
        deleteAddressApi(setIsLoading, _id, userInformation.ipAddress).then((status) => {
            if (status) {
                showAddressApi(setIsLoading, userInformation.ipAddress).then((result) => {
                    if (result) {
                        setSavedAddresses(result);
                        setUserInformation((prev) => ({ ...prev, userAddressInfo: result }));
                        storeToken('userAddressInfo', JSON.stringify(result));
                        navigation.goBack();
                        ToastAndroid.show('Address Deleted Successfully', ToastAndroid.SHORT);
                    }
                });
            }
            else {
                ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
            }
        });
    };
    return (
        <SafeAreaView style={Styles.myAddressMainContainer}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <View style={Styles.myAddressHeadingContainer}>
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
                    <Text style={Styles.commonTextStyle}>Address</Text>
                </View>
            </View>
            <View style={{ paddingTop: 12 }}>
                <TouchableOpacity style={Styles.newAddressCard} onPress={onPressAddNewAddress}>
                    <FontAwesome name="plus" color="#000" size={20} />
                    <View style={{ marginTop: -2 }}>
                        <Text style={{ ...Styles.commonTextStyle, fontSize: 18 }}>Add a new address</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={Styles.savedAddressContainer}>
                <View>
                    <Text style={{ ...Styles.commonTextStyle, fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>{savedAddresses.length} SAVED ADDRESS</Text>
                </View>
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'column', position: 'relative', gap: 12 }}>
                        {
                            savedAddresses.length !== 0 && savedAddresses.map(({ _id, fullName, addressType, phone, address }, index) => (
                                <View key={_id} style={Styles.eachAddressContainer}>
                                    {/* {console.log(savedAddresses[0]['_id'], fullName, addressType, phone, address)} */}
                                    <View style={Styles.nameHeadingContainer}>
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 20 }}>
                                            {fullName}
                                        </Text>
                                        <LinearGradient
                                            colors={['#238', '#000']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            useAngle={true}
                                            angle={45}
                                            angleCenter={{ x: 0.6, y: 0.3 }}
                                            style={Styles.workTypeContainer}
                                        >
                                            <Text style={{ ...Styles.commonTextStyle, fontSize: 10, color: '#fff' }}>{addressType}</Text>
                                        </LinearGradient>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 14 }}>{address?.join(', ')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 5 }}>
                                        <EntypoIcon name="old-phone" color="#000" />
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 15 }}>{phone}</Text>
                                    </View>
                                    <View style={{ position: 'absolute', right: 8, top: 8 }}>
                                        <TouchableOpacity onPress={() => onPressDeleteAddressBtn(_id)}>
                                            <MaterialIcon name="delete" size={20} color="rgb(240, 0, 0)" />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => onClickEditAddressBtn(index, _id)}>
                                            <MaterialCommunityIcon name="store-edit" size={20} color="#238" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Address;

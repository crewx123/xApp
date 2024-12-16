import React from 'react';
import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StatusBar, ToastAndroid } from 'react-native';
import CustomInput from '../../../../components/CustomInput/InputField';
import CustomButton from '../../../../components/CustomButton/Button';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { addAddressApi } from '../../../../utils/addAddressAPI';
import { updateAddressApi } from '../../../../utils/updateAddressAPI';
import { showAddressApi } from '../../../../utils/showAddressAPI';
import { storeToken } from '../../../../utils/token';
import { useAuth } from '../../../../context/Auth/Auth';
import { Styles } from './style/AddNewAddressStyle';

const AddNewAddress = ({ route, navigation }) => {

    const { data } = route.params || null;
    console.log(data);
    const { setUserInformation } = useAuth();
    const [errors, setErrors] = useState({});

    const [addressInfo, setAddressInfo] = useState({
        fullName: data?.fullName || '',
        addressType: data?.addressType || 'Home',
        phone: data?.phone?.toString() || '',
        alternate: data?.alternate?.toString() || '',
        pincode: data?.address[5]?.toString() || '',
        state: data?.address[4] || '',
        city: data?.address[3] || '',
        houseNo: data?.address[0] || '',
        colonyName: data?.address[1] || '',
        landmark: data?.address[2] || ''
    });

    const handleValidation = () => {
        let valid = true;
        const { fullName, addressType, phone, pincode, state, city, houseNo, colonyName, alternate, landmark } = addressInfo
        if (!fullName) {
            setErrors((prev) => ({ ...prev, fullName: 'Name is required' }))
            valid = false;
        }
        if (!addressType) {
            setErrors((prev) => ({ ...prev, addressType: 'AddressType is required' }));
            valid = false;
        }

        if (!phone) {
            setErrors((prev) => ({ ...prev, phone: 'Phone is required' }));
            valid = false;
        }

        if (phone[0] === '0' || phone[0] === '1' || phone[0] === '2' || phone[0] === '3' || phone[0] === '4' || phone[0] === '5' || phone[0] === '6') {
            setErrors((prev) => ({ ...prev, phone: 'Invalid phone number' }));
            valid = false;
        }
        if (alternate) {
            if (alternate[0] === '0' || alternate[0] === '1' || alternate[0] === '2' || alternate[0] === '3' || alternate[0] === '4' || alternate[0] === '5' || alternate[0] === '6') {
                setErrors((prev) => ({ ...prev, phone: 'Invalid phone number' }))
            }
        }

        if (!pincode) {
            setErrors((prev) => ({ ...prev, pincode: 'Pincode is required' }));
            valid = false;
        }
        if (!state) {
            setErrors((prev) => ({ ...prev, state: 'State is required' }));
            valid = false;
        }

        if (!city) {
            setErrors((prev) => ({ ...prev, city: 'City is required' }));
            valid = false;
        }
        if (!houseNo) {
            setErrors((prev) => ({ ...prev, houseNo: 'House No is required' }));
            valid = false;
        }
        if (!colonyName) {
            setErrors((prev) => ({ ...prev, colonyName: 'Colony name is required' }));
            valid = false;
        }
        // if (!email) {
        //     errors.email = 'Email is required';
        //     valid = false;
        // } else if (!/\S+@\S+\.\S+/.test(email)) {
        //     errors.email = 'Invalid email address';
        //     valid = false;
        // }

        // if (!password) {
        //     errors.password = 'Password is required';
        //     valid = false;
        // }
        // setErrors(errors);
        return valid;
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleAddNewAddress = async () => {
        handleValidation();
        addAddressApi(setIsLoading, addressInfo).then((status) => {
            if (status) {
                showAddressApi(setIsLoading).then((result) => {
                    if (result) {
                        setUserInformation((prev) => ({ ...prev, userAddressInfo: result }));
                        storeToken('userAddressInfo', JSON.stringify(result));
                        navigation.goBack();
                        ToastAndroid.show("Address Saved Successfully", ToastAndroid.SHORT);
                    }
                })
            }
            else {
                ToastAndroid.show("Address not saved, try again", ToastAndroid.SHORT);
            }
        });
    }

    const handleUpdateAddress = () => {
        handleValidation();
        updateAddressApi(setIsLoading, addressInfo).then((status) => {
            if (status) {
                showAddressApi(setIsLoading).then((result) => {
                    if (result) {
                        setUserInformation((prev) => ({ ...prev, userAddressInfo: result }));
                        storeToken('userAddressInfo', JSON.stringify(result));
                        navigation.goBack();
                        ToastAndroid.show("Address Updated Successfully", ToastAndroid.SHORT);
                    }
                })
            }
            else {
                ToastAndroid.show("Address not Updated, try again", ToastAndroid.SHORT);
            }
        })

    }

    return (
        <SafeAreaView style={Styles.myAddressMainContainer}>
            <StatusBar
                backgroundColor='#fff'
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
                        name='left'
                        color='#000'
                        size={26}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={Styles.commonTextStyle}>{data ? 'Update Address' : 'New Address'}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ paddingTop: 16 }}>
                    <CustomInput
                        isRequired={true}
                        name={addressInfo.fullName}
                        setName={value => { setAddressInfo({ ...addressInfo, fullName: value }) }}
                        labelName='Name'
                        labelNameColor='#000'
                        labelFontsize={15}
                        textInputBackgroundColor='#fff'
                        textInputBorderWidth={0.5}
                        textInputBorderColor='#000'
                        textInputFontSize={15}
                        textInputPaddingHorizontal={0}
                        textInputPlaceHolderColor='#000'
                        textInputColor='#000'
                        errorName={errors.fullName}
                    />
                    <CustomInput
                        isRequired={true}
                        name={addressInfo.phone}
                        setName={value => { console.log(value); setAddressInfo({ ...addressInfo, phone: value }) }}
                        labelName='Mobile'
                        labelNameColor='#000'
                        inputType='phone-pad'
                        maxInputSize={10}
                        labelFontsize={15}
                        textInputBackgroundColor='#fff'
                        textInputBorderWidth={0.5}
                        textInputBorderColor='#000'
                        textInputFontSize={15}
                        textInputPaddingHorizontal={0}
                        textInputPlaceHolderColor='#000'
                        textInputColor='#000'
                        errorName={errors.phone}
                    />
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '48%' }}>
                            <CustomInput
                                isRequired={false}
                                name={addressInfo.alternate}
                                setName={value => { setAddressInfo({ ...addressInfo, alternate: value }) }}
                                labelName='Alternate Mobile'
                                labelNameColor='#000'
                                inputType='phone-pad'
                                labelFontsize={15}
                                maxInputSize={10}
                                textInputBackgroundColor='#fff'
                                textInputBorderWidth={0.5}
                                textInputBorderColor='#000'
                                textInputFontSize={15}
                                textInputPaddingHorizontal={0}
                                textInputPlaceHolderColor='#000'
                                textInputColor='#000'
                                errorName={errors.alternate}
                            />
                        </View>
                        <View style={{ width: '48%' }}>
                            <CustomInput
                                isRequired={true}
                                name={addressInfo.pincode}
                                setName={value => { setAddressInfo({ ...addressInfo, pincode: value }) }}
                                labelName='Pincode'
                                labelNameColor='#000'
                                inputType='phone-pad'
                                labelFontsize={15}
                                textInputBackgroundColor='#fff'
                                textInputBorderWidth={0.5}
                                textInputBorderColor='#000'
                                textInputFontSize={15}
                                textInputPaddingHorizontal={0}
                                textInputPlaceHolderColor='#000'
                                textInputColor='#000'
                                errorName={errors.pincode}
                            />
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '48%' }}>
                            <CustomInput
                                isRequired={true}
                                name={addressInfo.state}
                                setName={value => { setAddressInfo({ ...addressInfo, state: value }) }}
                                labelName='State'
                                labelNameColor='#000'
                                labelFontsize={15}
                                textInputBackgroundColor='#fff'
                                textInputBorderWidth={0.5}
                                textInputBorderColor='#000'
                                textInputFontSize={15}
                                textInputPaddingHorizontal={0}
                                textInputPlaceHolderColor='#000'
                                textInputColor='#000'
                                errorName={errors.state}
                            />
                        </View>
                        <View style={{ width: '48%' }}>
                            <CustomInput
                                isRequired={true}
                                name={addressInfo.city}
                                setName={value => { setAddressInfo({ ...addressInfo, city: value }) }}
                                labelName='City'
                                labelNameColor='#000'
                                labelFontsize={15}
                                textInputBackgroundColor='#fff'
                                textInputBorderWidth={0.5}
                                textInputBorderColor='#000'
                                textInputFontSize={15}
                                textInputPaddingHorizontal={0}
                                textInputPlaceHolderColor='#000'
                                textInputColor='#000'
                                errorName={errors.city}
                            />
                        </View>
                    </View>

                    <CustomInput
                        isRequired={true}
                        name={addressInfo.houseNo}
                        setName={value => { setAddressInfo({ ...addressInfo, houseNo: value }) }}
                        labelName='House No. / Building Name'
                        labelNameColor='#000'
                        labelFontsize={15}
                        textInputBackgroundColor='#fff'
                        textInputBorderWidth={0.5}
                        textInputBorderColor='#000'
                        textInputFontSize={15}
                        textInputPaddingHorizontal={0}
                        textInputPlaceHolderColor='#000'
                        textInputColor='#000'
                        errorName={errors.houseNo}
                    />
                    <CustomInput
                        isRequired={true}
                        name={addressInfo.colonyName}
                        setName={value => { setAddressInfo({ ...addressInfo, colonyName: value }) }}
                        labelName='Road Name / Area / Colony '
                        labelNameColor='#000'
                        labelFontsize={15}
                        textInputBackgroundColor='#fff'
                        textInputBorderWidth={0.5}
                        textInputBorderColor='#000'
                        textInputFontSize={15}
                        textInputPaddingHorizontal={0}
                        textInputPlaceHolderColor='#000'
                        textInputColor='#000'
                        errorName={errors.colonyName}
                    />
                    <CustomInput
                        name={addressInfo.landmark}
                        setName={value => { setAddressInfo({ ...addressInfo, landmark: value }) }}
                        labelName='Landmark'
                        labelNameColor='#000'
                        labelFontsize={15}
                        textInputBackgroundColor='#fff'
                        textInputBorderWidth={0.5}
                        textInputBorderColor='#000'
                        textInputFontSize={15}
                        textInputPaddingHorizontal={0}
                        textInputPlaceHolderColor='#000'
                        textInputColor='#000'
                    />
                    <CustomInput
                        name={addressInfo.addressType}
                        setName={value => { setAddressInfo({ ...addressInfo, addressType: value }) }}
                        labelName='AddressType'
                        inputType='Radio'
                        radioValues={['Home', 'Official']}
                        labelNameColor='#000'
                        labelFontsize={15}
                        textInputBackgroundColor='#fff'
                        // textInputBorderWidth={0.5}
                        // textInputBorderColor='#000'
                        textInputFontSize={15}
                        textInputPaddingHorizontal={0}
                        textInputPlaceHolderColor='#000'
                        textInputColor='#000'
                    />
                    <CustomButton
                        gradientColor={['#238', '#000']}
                        name={data ? 'Save Changes' : 'Save Address'}
                        btnNameColor='#fff'
                        onPress={data ? handleUpdateAddress : handleAddNewAddress}
                        isLoading={isLoading}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default AddNewAddress;
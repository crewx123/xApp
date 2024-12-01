import React from 'react';
import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import CustomInput from '../../../../components/CustomInput/InputField';
import CustomButton from '../../../../components/CustomButton/Button';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Styles } from './style/AddNewAddressStyle';

const AddNewAddress = ({ navigation }) => {

    const [addressInfo, setAddressInfo] = useState({
        fullName: '',
        addressType: '',
        phone: null,
        alternate: null,
        pincode: null,
        state: '',
        city: '',
        houseNo: '',
        colonyName: '',
        landmark: ''
    });


    const handleAddNewAddress = () => {
        console.log(addressInfo);
        console.log('Form submitted successfully');
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
                    <Text style={Styles.commonTextStyle}>New Address</Text>
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
                    />
                    <CustomInput
                        isRequired={true}
                        name={addressInfo.phone}
                        setName={value => { setAddressInfo({ ...addressInfo, phone: value }) }}
                        labelName='Mobile'
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
                                textInputBackgroundColor='#fff'
                                textInputBorderWidth={0.5}
                                textInputBorderColor='#000'
                                textInputFontSize={15}
                                textInputPaddingHorizontal={0}
                                textInputPlaceHolderColor='#000'
                                textInputColor='#000'
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
                    <CustomButton
                        gradientColor={['#238', '#000']}
                        name='Save Address'
                        btnNameColor='#fff'
                        onPress={handleAddNewAddress}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default AddNewAddress;
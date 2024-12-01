import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Styles } from './style/AddressStyle';
import LinearGradient from 'react-native-linear-gradient';

const Address = ({ navigation }) => {

    const [savedAddresses, setSavedAddresses] = useState([
        {
            _id: 1,
            fullName: 'Aditya Sharma',
            workType: 'Home',
            phone: 8178772580,
            address: ['First Floor, F-377', 'F Block, Sector-63', 'Meerut Division', 'Uttar Pradesh', '201301']
        },
        {
            _id: 2,
            fullName: 'Prince Kumar',
            workType: 'Office',
            phone: 7011127782,
            address: ['First Floor, F-377', 'F Block, Sector-63', 'Meerut Division', 'Uttar Pradesh', '201301']
        },
        {
            _id: 3,
            fullName: 'Shiv Shankar',
            workType: 'Office',
            phone: 2567272876,
            address: ['First Floor, F-377', 'F Block, Sector-63', 'Meerut Division', 'Uttar Pradesh', '201301']
        },
        {
            _id: 4,
            fullName: 'Dikshant Singh',
            workType: 'Home',
            phone: 1782348764,
            address: ['First Floor, F-377', 'F Block, Sector-63', 'Meerut Division', 'Uttar Pradesh', '201301']
        },
        {
            _id: 5,
            fullName: 'Dikshant Singh',
            workType: 'Home',
            phone: 1782348764,
            address: ['First Floor, F-377', 'F Block, Sector-63', 'Meerut Division', 'Uttar Pradesh', '201301']
        },
        {
            _id: 6,
            fullName: 'Dikshant Singh',
            workType: 'Home',
            phone: 1782348764,
            address: ['First Floor, F-377', 'F Block, Sector-63', 'Meerut Division', 'Uttar Pradesh', '201301']
        }
    ]);

    const onPressAddNewAddress = () => {
        navigation.navigate('NewAddress');
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
                    <Text style={Styles.commonTextStyle}>Address</Text>
                </View>
            </View>
            <View style={{ paddingTop: 12 }}>
                <TouchableOpacity style={Styles.newAddressCard} onPress={onPressAddNewAddress}>
                    <FontAwesome name='plus' color='#000' size={20} />
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
                    <View style={{ flexDirection: 'column', gap: 12 }}>
                        {
                            savedAddresses.map(({ _id, fullName, workType, phone, address }) => (
                                <View key={_id} style={Styles.eachAddressContainer}>
                                    <View style={Styles.nameHeadingContainer}>
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 20, }}>{fullName}</Text>
                                        <LinearGradient
                                            colors={['#238', '#000']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            useAngle={true}
                                            angle={45}
                                            angleCenter={{ x: 0.6, y: 0.3 }}
                                            style={Styles.workTypeContainer}
                                        >
                                            <Text style={{ ...Styles.commonTextStyle, fontSize: 10, color: '#fff' }}>{workType}</Text>
                                        </LinearGradient>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 14 }}>{address.join(', ')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                        <EntypoIcon name='old-phone' color='#000' />
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 15 }}>{phone}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Address;
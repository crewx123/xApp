import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../../components/CustomInput/InputField';
import { productImg } from '../../../theme/Images';
import { Styles } from './style/MyOrderStyle';

const MyOrders = ({ navigation }) => {
    const [filterSearchValue, setFilterSearchValue] = useState('');
    const monthMapping = {
        1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr',
        5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug',
        9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
    }
    const date = new Date();
    return (
        <SafeAreaView style={Styles.myOrdersMainContainer}>
            <StatusBar
                backgroundColor='#fff'
                barStyle="dark-content"
            />
            <View style={Styles.myOrdersHeadingContainer}>
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
                    <Text style={Styles.commonTextStyle}>Orders</Text>
                </View>
            </View>
            <View style={Styles.searchBarContainer}>
                <View style={{ width: '90%' }}>
                    <CustomInput
                        iconName='search-outline'
                        iconColor='#000'
                        name={filterSearchValue}
                        setName={setFilterSearchValue}
                        inputPlaceholder='Search your order here...'
                        labelFontsize={15}
                        textInputBackgroundColor='#fff'
                        textInputBorderWidth={0.5}
                        textInputBorderColor='#000'
                        textInputFontSize={15}
                        textInputPaddingHorizontal={12}
                        textInputPlaceHolderColor='#000'
                        textInputColor='#000'
                    />
                </View>
                <TouchableOpacity>
                    <AntIcon
                        name='filter'
                        color='#000'
                        size={22}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={Styles.allOrdersContainer}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={Styles.eachOrderContainer}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('showOrderInfo')}
                            >
                                <View style={Styles.orderInfoContainer}>
                                    <View style={Styles.orderImagesContainer}>
                                        <Image source={productImg} style={{ width: 90, height: 90, borderRadius: 200 }} />
                                    </View>
                                    <View style={{ flexDirection: 'column', gap: 8 }}>
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 15 }}>Delivered on {monthMapping[date.getMonth() + 1] + ' ' + ((date.getFullYear()).toString()).slice(2)}</Text>
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 15, color: 'rgb(120, 120, 120)' }}>Product Name</Text>
                                    </View>
                                </View>
                                <View>
                                    <AntIcon
                                        name='right'
                                        color='#000'
                                        size={16}
                                    />
                                </View>
                            </TouchableOpacity>
                        ))
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyOrders;
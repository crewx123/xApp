/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Styles } from './style/ProductStyle';
import { productImg } from '../../theme/Images';

const Product = ({ navigation }) => {

    const [listOfProductSpecsDropdown, setListOfProductSpecsDropdown] = useState([false, false, false, false, false]);
    const handleOnChildPress = (e) => {
        e.stopPropagation();
    }

    return (
        <SafeAreaView style={Styles.productInfoMainContainer} >
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <View style={Styles.productImagesContainer}>
                    <ScrollView
                        horizontal={true}
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            [1, 2, 3, 4, 5].map((_, index) => (
                                <Image
                                    key={index}
                                    source={productImg}
                                    style={Styles.image}
                                    resizeMode="cover"
                                />
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={Styles.productColorsContainer}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                            <View key={index}>
                                <Image source={productImg} style={Styles.eachColor} resizeMode="cover" />
                            </View>
                        ))
                    }
                </View>
                <View style={Styles.productCategoryInfoContainer}>
                    <View>
                        <Text style={{ ...Styles.commonTextStyle, fontSize: 16 }}>Earth Dye Graphic Jogger(Product Name)</Text>
                    </View>
                    <View style={Styles.categoryNameAndColorContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Text style={{ ...Styles.commonTextStyle }}>Category Name</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Text style={{ ...Styles.commonTextStyle, fontSize: 17 }}>{'\u2022'}</Text>
                                <Text style={{ ...Styles.commonTextStyle }}>5 Colors</Text>
                            </View>
                        </View>
                        <View style={Styles.priceContainer}>
                            <MaterialIcon name="currency-rupee" size={15} color="#000" />
                            <Text style={{ ...Styles.commonTextStyle }}>500</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ ...Styles.commonTextStyle, color: 'grey' }}>Men's Cuffed Jogger</Text>
                    </View>
                    <View style={Styles.shippingTypeContainer}>
                        <Text style={{ ...Styles.commonTextStyle, color: '#fff', textAlign: 'center', fontSize: 9 }}>Free Shipping</Text>
                    </View>
                </View>
                <View style={Styles.sizeContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8 }}>
                        <Text style={{ ...Styles.commonTextStyle }}>Size Guide</Text>
                        <Text style={{ ...Styles.commonTextStyle }}>Available</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingBottom: 8 }}>
                        {
                            ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                                <TouchableOpacity key={index} style={{ padding: 16 }}>
                                    <Text style={{ ...Styles.commonTextStyle, color: '#000' }}>{size}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
                <View style={Styles.highLights}>
                    {
                        ['Seamless one-piece upper provides maximum comfort', 'Lightly padded heel collar locks ankle in place', 'Flexible, cushioned midsole offers a smoother ride'].map((info, index) => (
                            <View key={index} style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                                <Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}>{'\u2022'}</Text>
                                <Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}>{info}</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={Styles.productSpecs}>
                    <TouchableOpacity style={{ paddingVertical: 12, borderBottomWidth: 0.8, borderBottomColor: '#000' }}
                        onPress={() => setListOfProductSpecsDropdown((prev) => {
                            const temp = [...prev];
                            temp[0] = !temp[0];
                            return temp;
                        })}
                        activeOpacity={1}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }}>
                            <Text style={{ ...Styles.commonTextStyle }}>Details</Text>
                            <FontAwesome name="plus" color="#000" />
                        </View>

                        {/* Problem in wrapping the content written inside it */}
                        {
                            listOfProductSpecsDropdown[0] &&
                            <TouchableWithoutFeedback onPress={handleOnChildPress}>
                                <View style={{ paddingHorizontal: 12, paddingVertical: 16 }} >
                                    <View>
                                        <Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}>Made to Go with the flow, our fan-fave sneaker keeps its signature breathable comfort while hitting the refresh button with a new elevated aesthetic and more springy support.</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', gap: 8 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                            <Text style={{ ...Styles.commonTextStyle, fontWeight: 700, fontSize: 12 }}>
                                                Best For:<Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}> Warm weather, everyday wear, socks optional</Text>
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, paddingRight: 12 }}>
                                            <Text style={{ ...Styles.commonTextStyle, fontWeight: 700, fontSize: 12 }}>Breezy Quality: <Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}> Lightweight, breathable tree fiber in the upper whdgwh wdvhwdvgw whgdeyhw3g </Text></Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingRight: 12 }}>
                                            <Text style={{ ...Styles.commonTextStyle, fontWeight: 700, fontSize: 12 }}>Versatile Design:<Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}> Wear-with-everything style, great for travel</Text></Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                            <Text style={{ ...Styles.commonTextStyle, fontWeight: 700, fontSize: 12 }}>
                                                Where It's Made:<Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}> Made in India</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        }
                    </TouchableOpacity>
                    <View style={{ paddingVertical: 12, borderBottomWidth: 0.8, borderBottomColor: '#000' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }}>
                            <Text style={{ ...Styles.commonTextStyle }}>Testing & Specs</Text>
                            <FontAwesome
                                name="plus"
                                color="#000"
                            />
                        </View>
                    </View>
                    <View style={{ paddingVertical: 12, borderBottomWidth: 0.8, borderBottomColor: '#000' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }}>
                            <Text style={{ ...Styles.commonTextStyle }}>Sustainaibility</Text>
                            <FontAwesome name="plus" color="#000" />
                        </View>
                    </View>
                    <View style={{ paddingVertical: 12, borderBottomWidth: 0.8, borderBottomColor: '#000' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }}>
                            <Text style={{ ...Styles.commonTextStyle }}>Care Guide</Text>
                            <FontAwesome name="plus" color="#000" />
                        </View>
                    </View>
                    <View style={{ paddingVertical: 12, borderBottomWidth: 0.8, borderBottomColor: '#000' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }}>
                            <Text style={{ ...Styles.commonTextStyle }}>Shipping & Returns</Text>
                            <FontAwesome name="plus" color="#000" />
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 12, paddingTop: 8, paddingBottom: 8 }}>
                    <View style={Styles.moreRelaventProduct}>
                        <View>
                            <Text style={{ ...Styles.commonTextStyle, fontSize: 16, letterSpacing: 1 }}>You Might Also Like</Text>
                        </View>
                        <View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(10, 10, 10, 0.9)', borderRadius: 100, paddingHorizontal: 4 }}>
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            paddingHorizontal: 16,
                                            paddingVertical: 8,
                                            // backgroundColor: showFourPressed ? 'grey' : 'transparent'
                                            backgroundColor: 'grey',
                                        }}
                                        // onPressIn={() => {
                                        //     if (!showFourPressed) {
                                        //         tooglePressed(setShowFourPressed, true);
                                        //         tooglePressed(setShowTwoPressed, false);
                                        //     }
                                        // }}
                                    >
                                        <Text style={{ ...Styles.commonTextStyle, color: '#fff', fontSize: 12 }}>Recommended</Text>
                                    </TouchableOpacity >
                                    <TouchableOpacity
                                        style={{
                                            borderRadius: 100,
                                            paddingHorizontal: 16, paddingVertical: 12,
                                            // backgroundColor: showTwoPressed ? 'grey' : 'transparent'
                                            backgroundColor: 'transparent',
                                        }}
                                        // onPressIn={() => {
                                        //     if (!showTwoPressed) {
                                        //         tooglePressed(setShowTwoPressed, true);
                                        //         tooglePressed(setShowFourPressed, false);
                                        //     }
                                        // }}
                                    >
                                        <Text style={{ ...Styles.commonTextStyle, color: '#fff', fontSize: 12 }}>Recently Viewed</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

export default Product;

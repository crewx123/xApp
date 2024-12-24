/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { productImg } from '../../theme/Images';
import { Styles } from './style/ProductSmallCardStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LoaderTemplate from '../Common/loaderTemplate';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const ProductSmallCard = ({ navigation, imageWidth, imageHeight, topHeadingName, topSubHeadingName, addBtnLeft, addBtnRight, showDescription, showSecondRow = true, showProductsOnPress = null, isLoading, loaderTitleSize }) => {
    return (
        <View style={Styles.MainContainer}>
            <View style={Styles.HeadingContainer}>
                <View>
                    <Text style={Styles.CommonFontStyle}>{topHeadingName || 'Shop'}</Text>
                    <Text style={{ ...Styles.CommonFontStyle, fontWeight: '700', fontSize: 19, letterSpacing: 2 }}>{topSubHeadingName || 'FALL FAVIORITES'}</Text>
                </View>
                <TouchableOpacity style={Styles.btnContainer} onPress={showProductsOnPress}>
                    <Text style={Styles.btnName}>shop all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                style={Styles.CardContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            >
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        { isLoading ?
                            [1, 2, 3, 4, 5].map((_, index) => (
                                <TouchableOpacity style={{ flexDirection: 'column' }} key={index} activeOpacity={1} >
                                    <View key={index} style={Styles.CardImageContainer}>
                                    <LoaderTemplate
                                        colorList={['rgb(0, 0, 0)', 'rgb(50, 50, 50)']}
                                        boxWidth={imageWidth || 100}
                                        boxHeight={imageHeight || 140}
                                        loaderTitle="XPRICE"
                                        loaderTitleColor="#fff"
                                        loaderTitleSize={loaderTitleSize || 16}
                                    />
                                    </View>
                                </TouchableOpacity>
                            ))
                            : [1, 2, 3, 4, 5].map((_, index) => (<TouchableOpacity style={{ flexDirection: 'column' }} key={index} onPress={() => navigation.navigate('showProductInfo')}>
                                <View key={index} style={Styles.CardImageContainer}>
                                    <Image source={productImg} style={{ ...Styles.CardImage, width: imageWidth || 100, height: imageHeight || 140 }} resizeMode="cover" />
                                    <TouchableOpacity>
                                        <Icon name="add-outline" size={25} color="#fff" style={{ ...Styles.addItemIcon, bottom: 5, right: 9 }} />
                                        <Icon name="add-outline" color={'#fff'} style={Styles.addItemIcon} size={25} />
                                    </TouchableOpacity>
                                </View>
                                {
                                    showDescription &&
                                    <View style={Styles.descriptionContainer}>
                                        <Text style={{ color: '#000', fontSize: 11.5, fontWeight: '700' }}>Force Renew Zip Hoodie</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: '#000', fontSize: 10.5, fontWeight: '400' }}>Black</Text>
                                            {/* <Text style={{ color: '#000', fontSize: 10, fontWeight: '600' }}> 4 Colors</Text> */}
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: -4 }}>
                                            <MaterialIcon name="currency-rupee" size={15} color="#000" />
                                            <Text style={{ color: '#000', fontSize: 10.5, fontWeight: '700' }}>500</Text>
                                        </View>
                                    </View>
                                }
                            </TouchableOpacity>))
                        }
                    </View>
                    {
                        showSecondRow &&
                        <View style={{ flexDirection: 'row' }}>
                            { isLoading ?
                                [1, 2, 3, 4, 5].map((_, index) => (
                                    <TouchableOpacity style={{ flexDirection: 'column' }} key={index} activeOpacity={1} >
                                        <View key={index} style={Styles.CardImageContainer}>
                                        <LoaderTemplate
                                            colorList={['rgb(0, 0, 0)', 'rgb(50, 50, 50)']}
                                            boxWidth={imageWidth || 100}
                                            boxHeight={imageHeight || 140}
                                            loaderTitle="XPRICE"
                                            loaderTitleColor="#fff"
                                            loaderTitleSize={loaderTitleSize || 16}
                                        />
                                        </View>
                                    </TouchableOpacity>
                                ))
                                : [1, 2, 3, 4, 5].map((_, index) => (<View key={index} style={Styles.CardImageContainer}>
                                    <Image source={productImg} style={{ ...Styles.CardImage, width: imageWidth || 100, height: imageHeight || 140 }} resizeMode="cover" />
                                    <TouchableOpacity>
                                        <Icon name="add-outline" size={25} color="#fff" style={{ ...Styles.addItemIcon, bottom: 5, right: 9 }} />
                                        <Icon name="add-outline" color={'#fff'} style={Styles.addItemIcon} size={25} />
                                    </TouchableOpacity>
                                </View>))
                            }
                        </View>
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default ProductSmallCard;

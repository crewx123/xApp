/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { productImg } from '../../theme/Images';
import { View, Image, StyleSheet, Text, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ToastAndroid, StatusBar } from 'react-native';
import NavBar from '../../components/NavBar2/NavBar';
import ModelDrawer from '../../components/Modal/Modal';
import ProductSmallCard from '../../components/productSmallCard/ProductSmallCard';
import SearchBarMenu from '../../components/SearchBarMenu/SearchBarMenu';
import AdsCard from '../../components/ProductAdsCard/ProductAdsCard';
import AddToCart from '../../components/Common/AddToCart/AddToCart';
import { useAuth } from '../../context/Auth/Auth';
import { fonts } from '../../theme/Fonts';
import { subSubCategoryApi } from '../../utils/subSubCategoryAPI';
import NavigateAnime from '../../components/Common/NavigationAnimation/NavigateAnimation';

const { height } = Dimensions.get('window');

export default function HomePage({ navigation }) {
    const { userInformation } = useAuth();
    const { ipAddress } = userInformation;

    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [isMenuDrawerVisible, setIsMenuDrawerVisible] = useState(false);
    const [isSearchBarDrawerVisible, setIsSearchBarDrawerVisible] = useState(false);
    const [isAddToCartDrawerVisible, setIsAddToCartDrawerVisible] = useState(false);

    const [isCategoryLoading, setCategoryLoading] = useState(false);
    const [subSubCategoryErrors, setSubSubCategoryErrors] = useState([]);
    const [subSubCategoryData, setSubSubCategoryData] = useState([]);

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        // Change background color at 250px
        if (scrollY >= 200) {
            setBackgroundColor('#000'); // Example background color
        } else {
            setBackgroundColor('transparent');
        }
    };

    const showProductsOnPressShowAll = () => {
        navigation.navigate('Products', { url: `product/showAllVariant` });
    };

    const showMyProfileOnPress = () => {
        navigation.navigate('Profile');
    };

    useEffect(() => {
        ToastAndroid.show('Welcome to the HomePage', ToastAndroid.SHORT);
        subSubCategoryApi(setSubSubCategoryData, setCategoryLoading, setSubSubCategoryErrors, ipAddress);
    }, []);

    return (
        <NavigateAnime>
            <SafeAreaView style={styles.container} >
                <StatusBar
                    translucent={false}
                    barStyle="light-content"
                    backgroundColor="#000"
                />
                <View>
                    <NavBar
                        BackgroundColor={backgroundColor}
                        setIsMenuDrawerVisible={setIsMenuDrawerVisible}
                        setIsSearchBarDrawerVisible={setIsSearchBarDrawerVisible}
                        setIsAddToCartDrawerVisible={setIsAddToCartDrawerVisible}
                        handleOnPressMyProfile={showMyProfileOnPress}
                    />
                </View>

                {isMenuDrawerVisible && <ModelDrawer
                    isDrawerVisible={isMenuDrawerVisible}
                    setIsDrawerVisible={setIsMenuDrawerVisible}
                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ borderBottomColor: '#fff', borderBottomWidth: 0.4, padding: 10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Categories</Text>
                        </View>
                        <View
                            style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}
                        >
                            < View style={{ flexDirection: 'column', gap: 4, paddingHorizontal: 20, paddingVertical: 8 }}>
                                {
                                    subSubCategoryData.length !== 0 && (subSubCategoryData?.data).map(({ _id, name }, index) => (
                                        <TouchableOpacity key={_id} >
                                            <Text style={{ color: '#fff', fontSize: 14, fontFamily: fonts.COMMON_REGULAR }}>{name}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                            <View style={{ height: 200 }}>
                                <ScrollView horizontal={true} bounces={false} showsHorizontalScrollIndicator={false}>
                                    {
                                        subSubCategoryData.length !== 0 && (subSubCategoryData?.data).map(({ _id, images, name }, index) => (
                                            index <= 5 && <View key={_id} style={{ position: 'relative' }} >
                                                <Image source={{ uri: `${subSubCategoryData.root}/${images}` }} style={{ width: 160, height: 200 }} resizeMode="cover" />
                                                <View style={{ position: 'absolute', bottom: 10, left: 7, transform: 'rotate(0deg)' }}>
                                                    <Text style={{ fontSize: 10, fontFamily: fonts.REGULAR, color: '#fff' }}>{name}</Text>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ModelDrawer >}

                {isSearchBarDrawerVisible && <SearchBarMenu
                    isDrawerVisible={isSearchBarDrawerVisible}
                    setIsDrawerVisible={setIsSearchBarDrawerVisible}
                />}

                {isAddToCartDrawerVisible && <AddToCart
                    isDrawerVisible={isAddToCartDrawerVisible}
                    setIsDrawerVisible={setIsAddToCartDrawerVisible}
                />}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    onScroll={handleScroll}
                >
                    {/* Full-Screen Image */}
                    <View style={styles.imageContainer}>
                        <Image
                            source={productImg}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <View style={styles.descriptionContainer}>
                            <Text style={{ ...styles.description, marginBottom: -12 }}>NEW</Text>
                            <Text style={styles.description}>ARRIVALS</Text>
                            <Text style={{ fontFamily: fonts.REGULAR, color: '#fff', fontSize: 13.2 }}>Best in class - Now Available</Text>
                        </View>
                    </View>
                    <ProductSmallCard
                        showProductsOnPress={showProductsOnPressShowAll}
                        navigation={navigation}
                        isLoading={isCategoryLoading}
                        loaderTitleSize={12}
                    />
                    <AdsCard
                        navigation={navigation}
                        adsHeadingName={'TRENDING NOW'}
                        tredingProductList={subSubCategoryData}
                        isLoading={isCategoryLoading}
                    />
                    <ProductSmallCard
                        topHeadingName="Shop"
                        topSubHeadingName="Best Sellers"
                        imageWidth={175}
                        imageHeight={250}
                        showDescription={true}
                        showSecondRow={false}
                        navigation={navigation}
                        isLoading={isCategoryLoading}
                        loaderTitleSize={14}
                    />
                </ScrollView>
            </SafeAreaView >
        </NavigateAnime>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 0,
    },
    imageContainer: {
        position: 'relative',
        height: height - StatusBar.currentHeight - 22,
        backgroundColor: '#000',
    },
    descriptionContainer: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 64,
        left: 24,
    },
    description: {
        color: '#fff',
        fontSize: 30.75,
        letterSpacing: 5,
        fontWeight: '900',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    productList: {
        padding: 16,
    },
    productItem: {
        padding: 16,
        marginBottom: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: 'gray',
    },
});

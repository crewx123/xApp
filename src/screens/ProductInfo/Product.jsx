/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native';
import UnitProduct from '../../components/Common/UnitProductCard/UnitProduct';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Styles } from './style/ProductStyle';
import { productImg } from '../../theme/Images';
import NavigateAnime from '../../components/Common/NavigationAnimation/NavigateAnimation';
import { showProductInfoApi } from '../../utils/showProductInfoAPI';
import PageSwitchLoader from '../../components/Common/PageSwitchLoader/PageSwitchLoader';
import { useAuth } from '../../context/Auth/Auth';
const { width, height } = Dimensions.get('window');

const Product = ({ navigation, route }) => {
    const { url } = route.params;
    const { userInformation } = useAuth();
    // console.log('Product URL', url);

    const [listOfProductSpecsDropdown, setListOfProductSpecsDropdown] = useState([false, false, false, false, false]);
    const handleOnChildPress = (e) => {
        e.stopPropagation();
    };

    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [productHighLight, setProductHighLight] = useState([
        {
            _id: 1,
            content: `Seamless one-piece upper provides maximum comfort`
        },
        {
            _id: 2,
            content: `Lightly padded heel collar locks ankle in place`
        },
        {
            _id: 3,
            content: `Flexible, cushioned midsole offers a smoother ride`
        }
    ]);

    const [productDescriptionList, setProductDescriptionList] = useState([
        {
            _id: 1,
            heading: 'Details',
            listType: true,
            content: '',
            // headingContent: '',
        },
        {
            _id: 2,
            heading: 'Testing & Specs',
            listType: false,
            content: '',
        },
        {
            _id: 3,
            heading: 'Sustainaibility',
            listType: true,
            content: '',
        },
        {
            _id: 4,
            heading: 'Care Guide',
            listType: true,
            content: '',
        },
        {
            _id: 5,
            heading: 'Shipping & Returns',
            listType: true,
            content: '',
        },

    ]);
    const [productSizesList, setProductSizesList] = useState([
        {
            _id: 1,
            size: 'XXS',
            available: true,
            cnt: 4
        },
        {
            _id: 2,
            size: 'XS',
            available: true,
            cnt: 6
        },
        {
            _id: 3,
            size: 'S',
            available: false,
            cnt: 10
        },
        {
            _id: 4,
            size: 'M',
            available: true,
            cnt: 10
        },
        {
            _id: 5,
            size: 'L',
            available: false,
            cnt: 3
        },
        {
            _id: 6,
            size: 'XL',
            available: false,
            cnt: 0
        },
        {
            _id: 7,
            size: 'XXL',
            available: true,
            cnt: 8
        }
    ]);

    const root = `http://${userInformation.ipAddress}/uploads/products/variant/`;
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);

    useEffect(() => {
        showProductInfoApi(setIsLoading, userInformation.ipAddress, url, setProductData);
    }, []);

    const [showAllColorImages, setShowAllColorImages] = useState([]);

    useEffect(() => {
        if (productData.length !== 0) {
            const colorImagesList = [];
            for (let data of productData) {
                colorImagesList.push({ colorImg: data.colorImage, colorName: data.color, eachColorList: data.Images });
            }
            setShowAllColorImages(colorImagesList);
        }
    }, [productData]);

    const [showRecommended, setShowRecommended] = useState(true);
    const [recentShowRecomended, setRecentlyShowRecomended] = useState(false);
    const [showSizeSelectorPopUp, setShowSizeSelectorPopUp] = useState(false);
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(-1);

    const tooglePressed = (setterFunc, status) => {
        setterFunc(status);
    }

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        if (selectedSizeIndex !== -1) {
            setShowSizeSelectorPopUp(true);
            return;
        }
        // Change background color at 250px
        if (scrollY >= 300 && scrollY <= 1000) {
            setShowSizeSelectorPopUp(true); // Example background color
        } else {
            setShowSizeSelectorPopUp(false);
        }
    };

    const scrollViewRef = useRef(null);

    const scrollToSection = () => {
        scrollViewRef.current.scrollTo({
            y: 300, // Vertical offset in pixels
            animated: true, // Scroll animation
        });
    };
    if (isLoading) {
        return <PageSwitchLoader />
    }
    else return (
        <NavigateAnime>
            <SafeAreaView style={Styles.productInfoMainContainer} >
                {showSizeSelectorPopUp && <TouchableOpacity activeOpacity={1} style={Styles.sizeSelectorBoxPopUpContainer} onPress={scrollToSection}>
                    {selectedSizeIndex !== -1 ?
                        productSizesList[selectedSizeIndex].cnt !== 0 ?
                            <Text style={{ ...Styles.commonTextStyle, color: '#fff', textAlign: 'center', fontSize: 16 }}> Add <Text style={{ fontWeight: '700' }}>{productSizesList[selectedSizeIndex].size}</Text> to Cart</Text>
                            :
                            <Text style={{ ...Styles.commonTextStyle, color: '#fff', textAlign: 'center', fontSize: 16 }}>Notify Me</Text>
                        :
                        <Text style={{ ...Styles.commonTextStyle, color: '#fff', textAlign: 'center', fontSize: 16 }} >Select Size</Text>
                    }
                </TouchableOpacity>}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    ref={scrollViewRef}
                    onScroll={handleScroll}
                >
                    <View style={Styles.productImagesContainer}>
                        <ScrollView
                            horizontal={true}
                            bounces={false}
                            nestedScrollEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                productData[selectedProductIndex]?.Images?.map(({ url, _id }, index) => (
                                    <Image
                                        key={_id}
                                        source={{ uri: `${root}${url}` }}
                                        style={Styles.image}
                                        resizeMode="cover"
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={Styles.productColorsContainer}>
                            {
                                showAllColorImages.map(({ colorImg, colorName }, index) => (
                                    // console.log(`${root}${color_Image}`)
                                    <TouchableOpacity
                                        key={index}
                                        style={{ borderWidth: 0.85, borderColor: colorName, padding: 0.8, borderRadius: 6 }}
                                        onPress={() => setSelectedProductIndex(index)}
                                    >
                                        <Image source={{ uri: `${root}${colorImg}` }} style={{ ...Styles.eachColor }} resizeMode="cover" />
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </ScrollView>
                    <View style={Styles.productCategoryInfoContainer}>
                        <View>
                            <Text style={{ ...Styles.commonTextStyle, fontSize: 16 }}>{productData[selectedProductIndex]?.title}(Product Name)</Text>
                        </View>
                        <View style={Styles.categoryNameAndColorContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Text style={{ ...Styles.commonTextStyle }}>Category Name</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ ...Styles.commonTextStyle, fontSize: 17 }}>{'\u2022'}</Text>
                                    <Text style={{ ...Styles.commonTextStyle }}>{productData.length} Colors</Text>
                                </View>
                            </View>
                            <View style={Styles.priceContainer}>
                                <MaterialIcon name="currency-rupee" size={15} color="#000" />
                                <Text style={{ ...Styles.commonTextStyle }}>{productData[selectedProductIndex]?.sale_price}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ ...Styles.commonTextStyle, color: 'grey' }}>Men's Cuffed Jogger</Text>
                        </View>
                        <View style={Styles.shippingTypeContainer}>
                            <Text
                                style={{ ...Styles.commonTextStyle, color: '#fff', textAlign: 'center', fontSize: 9 }}
                            >
                                {productData[selectedProductIndex]?.sale_price > 499 ? 'Free Shipping' : 'Paid Shipping'}
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.sizeContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8 }}>
                            <Text style={{ ...Styles.commonTextStyle }}>Size Guide</Text>
                            <Text style={{ ...Styles.commonTextStyle }}>{selectedSizeIndex !== -1 ? `Available : ${productSizesList[selectedSizeIndex]?.cnt}` : ''}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingBottom: 8 }}>
                            {
                                productSizesList.map(({ _id, size }, index) => (
                                    <TouchableOpacity
                                        key={_id}
                                        style={{ padding: 16, backgroundColor: index === selectedSizeIndex ? '#000' : '#fff', borderRadius: index === selectedSizeIndex ? 8 : 0 }}
                                        onPress={() => setSelectedSizeIndex(index)}
                                    >
                                        <Text style={{ ...Styles.commonTextStyle, color: index === selectedSizeIndex ? '#fff' : '#000' }}>{size}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View style={Styles.highLights}>
                        {
                            productHighLight.map(({ _id, content }) => (
                                <View key={_id} style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                                    <Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}>{'\u2022'}</Text>
                                    <Text style={{ ...Styles.commonTextStyle, fontSize: 12 }}>{content}</Text>
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
                                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(10, 10, 10, 0.9)', borderRadius: 100, padding: 4 }}>
                                        <TouchableOpacity
                                            style={{
                                                borderRadius: 100,
                                                paddingHorizontal: 16,
                                                paddingVertical: 8,
                                                backgroundColor: showRecommended ? 'grey' : 'transparent'
                                                // backgroundColor: 'grey',
                                            }}
                                            onPressIn={() => {
                                                if (!showRecommended) {
                                                    tooglePressed(setShowRecommended, true);
                                                    tooglePressed(setRecentlyShowRecomended, false);
                                                }
                                            }}
                                        >
                                            <Text style={{ ...Styles.commonTextStyle, color: '#fff', fontSize: 12 }}>Recommended</Text>
                                        </TouchableOpacity >
                                        <TouchableOpacity
                                            style={{
                                                borderRadius: 100,
                                                paddingHorizontal: 16,
                                                paddingVertical: 8,
                                                backgroundColor: recentShowRecomended ? 'grey' : 'transparent'
                                                // backgroundColor: 'transparent',
                                            }}
                                            onPressIn={() => {
                                                if (!recentShowRecomended) {
                                                    tooglePressed(setRecentlyShowRecomended, true);
                                                    tooglePressed(setShowRecommended, false);
                                                }
                                            }}
                                        >
                                            <Text style={{ ...Styles.commonTextStyle, color: '#fff', fontSize: 12 }}>Recently Viewed</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 8 }}>
                            <UnitProduct
                                gridOfTwo={true}
                                imageWidth={width / 2.25}
                                // imageHeight={showTwoPressed ? 232 : 110}
                                productsData={{
                                    "success": true,
                                    "root": "http://192.168.1.14:8080/uploads/products/variant",
                                    "data": [
                                        {
                                            "_id": "678e7d26602449287d86b9ae",
                                            "title": "Force Renew Zip Hoodie",
                                            "color": "#cd1818",
                                            "colorImage": "1737391205621-5c13f979-1155-4d2e-bd60-82a5ce277f42.png",
                                            "sale_price": 3000
                                        },
                                        {
                                            "_id": "678e84f2602449287d86b9be",
                                            "title": "Force Renew Zip Hoodie",
                                            "color": "#cd1818",
                                            "colorImage": "1737391205621-5c13f979-1155-4d2e-bd60-82a5ce277f42.png",
                                            "sale_price": 3000
                                        }
                                    ]
                                }}
                                imageHeight={(5 / 4) * (width / 2.25)}
                                showDescription={true}
                                descriptionColor={'#000'}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </NavigateAnime>
    );
};

export default Product;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ToastAndroid, ScrollView, Dimensions } from 'react-native';
import { Styles } from './style/ViewProducts';
import { poloImg } from '../../theme/Images';
import UnitProduct from '../../components/Common/UnitProductCard/UnitProduct';
import FilterModal from '../../components/Common/Filters/Filter';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PageSwitchLoader from '../../components/Common/PageSwitchLoader/PageSwitchLoader';
import { getAllProducts } from '../../utils/getAllProductsAPI';
import NavigateAnime from '../../components/Common/NavigationAnimation/NavigateAnimation';
import { useAuth } from '../../context/Auth/Auth';
const { width } = Dimensions.get('window');

const AllProductsList = ({ route, navigation }) => {
    const { url } = route.params;
    // console.log("URL", url);
    const { userInformation } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [productsData, setProductsData] = useState([]);
    const minTime = 800;
    const maxTime = 2200;
    const calculatedTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    useEffect(() => {
        ToastAndroid.show('Welcome to the List of the products', 1000);
    }, []);

    const [isFilterModalVisible, setFilterModalVisible] = useState(false);
    const [showTwoPressed, setShowTwoPressed] = useState(true);
    const [showFourPressed, setShowFourPressed] = useState(false);
    const tooglePressed = (setReverse, status) => {
        setReverse(status);
    };


    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoading(false);
            if (url !== '')
                getAllProducts(setIsLoading, userInformation.ipAddress, url, setProductsData);
        }, calculatedTime);
        return () => clearTimeout(timeOut);
    }, []);

    if (isLoading) {
        return <PageSwitchLoader isLoading={isLoading} />
    }

    else return (
        <NavigateAnime>
            <View
                style={Styles.productListContainer}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                    <View style={Styles.eachProductImageContainer}>
                        <Image source={poloImg} style={Styles.eachProductImage} resizeMode="cover" />
                    </View>
                    {
                        <View style={Styles.showAllProductContainer}>
                            <UnitProduct
                                productsData={productsData}
                                navigation={navigation}
                                gridOfTwo={showTwoPressed}
                                imageWidth={showTwoPressed ? width / 2.25 : width / 4.6}
                                // imageHeight={showTwoPressed ? 232 : 110}
                                imageHeight={showTwoPressed ? (5 / 4) * (width / 2.25) : (6 / 5) * (width / 4.6)}
                                showDescription={showTwoPressed ? true : false}
                                descriptionColor={'#000'}
                            />
                        </View>
                    }
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 20 }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(10, 10, 10, 0.9)', borderRadius: 50 }}>
                            <TouchableOpacity
                                style={{ borderRadius: 50, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: showFourPressed ? 'grey' : 'transparent' }}
                                onPressIn={() => {
                                    if (!showFourPressed) {
                                        tooglePressed(setShowFourPressed, true);
                                        tooglePressed(setShowTwoPressed, false);
                                    }
                                }}
                            >
                                <MaterialIcon name="grid-4x4" color={showFourPressed ? '#fff' : 'grey'} size={18} />
                            </TouchableOpacity >
                            <TouchableOpacity
                                style={{ borderRadius: 50, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: showTwoPressed ? 'grey' : 'transparent' }}
                                onPressIn={() => {
                                    if (!showTwoPressed) {
                                        tooglePressed(setShowTwoPressed, true);
                                        tooglePressed(setShowFourPressed, false);
                                    }
                                }}
                            >
                                <MaterialIcon name="grid-view" color={showTwoPressed ? '#fff' : 'grey '} size={18} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)', borderRadius: 50, padding: 16 }}>
                            <TouchableOpacity
                                onPressIn={() => {
                                    tooglePressed(setFilterModalVisible, true);
                                }}
                            >
                                <MaterialIcon name="filter-list-alt" color="#fff" size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {isFilterModalVisible && <FilterModal
                    isFilterModalVisible={isFilterModalVisible}
                    setFilterModalVisible={setFilterModalVisible}
                />}
            </View>
        </NavigateAnime>
    );
};

export default AllProductsList;

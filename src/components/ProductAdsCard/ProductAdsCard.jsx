/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */

// import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
// import { productImg } from '../../theme/Images';
import LoaderTemplate from '../Common/loaderTemplate';
import { Styles } from './style/ProductAdsCardsStyle';
import { useEffect, useState } from 'react';
const windowWidth = Dimensions.get('window').width;

const ProductAdCard = ({ navigation, adsHeadingName, tredingProductList = [], isLoading }) => {
    const [clickedVariantId, setClickedVariantId] = useState('');

    // const imageWidth = windowWidth - 130;
    // const [ imageHeight, setImageHeight ] = useState(0);
    // const { width, height } = Image.resolveAssetSource(productImg);
    // const aspectRatio = height / width;
    // console.log(width, height);
    // console.log('CalculatedHeight', windowWidth * aspectRatio);
    // useEffect(() => {
    //     // Fetch image dimensions and calculate height
    //     tredingProductList.data?.map(({ images }) => {
    //         Image.getSize(
    //         `${tredingProductList.root}/${images}`,
    //           (width, height) => {
    //             console.log('Image WIdth and Height', width, height);
    //             // const aspectRatio = +(height / width);
    //             // setImageHeight(imageWidth * aspectRatio);
    //             // console.log((imageWidth * aspectRatio).toString());
    //           },
    //           (error) => {
    //             console.error('Error fetching image dimensions:', error);
    //           }
    //         );
    //         return null;
    //     })
    //   }, [tredingProductList]);

    useEffect(() => {
        if (clickedVariantId !== '')
            navigation.navigate('Products', { url: `product/showVariantDetails?variantId=${clickedVariantId}` });
    }, [clickedVariantId]);

    const showProductsOnPressShowAll = () => {
        navigation.navigate('Products', { url: `product/showAllVariant` });
    };

    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.headingContainer}>
                <Text style={Styles.headingText}>{adsHeadingName}</Text>
            </View>
            <ScrollView style={Styles.allSubCategoryContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    isLoading ? ([1, 2, 3, 4, 5].map((_, index) => (
                        <View key={index} style={Styles.adsCardContainer}>
                            <LoaderTemplate
                                colorList={['rgb(0, 0, 0)', 'rgb(50, 50, 50)']}
                                boxWidth={windowWidth - 130}
                                boxHeight={windowWidth - 65}
                                loaderTitle="XPRICE"
                                loaderTitleColor="#fff"
                                loaderTitleSize={18.5}
                            />
                        </View>
                    ))) : (tredingProductList.data)?.map(({ _id, images, name }) => (<View style={Styles.adsCardContainer} key={_id}>
                        <Image source={{ uri: `${tredingProductList.root}/${images}` }} style={{ ...Styles.adImage, height: windowWidth - 65 }} resizeMode="cover" />
                        <View style={Styles.eachSubCategoryInfoContainer}>
                            <View style={Styles.eachSubCategoryNameContainer}>
                                <Text style={Styles.subCatergoryName}>{name}</Text>
                            </View>
                            <TouchableOpacity style={Styles.btnContainer} onPress={showProductsOnPressShowAll}>
                                <Text style={Styles.btnName}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    ))}
            </ScrollView>
        </View>

    );
};

export default ProductAdCard;

// http://localhost:8000/product/showSubSubCategory

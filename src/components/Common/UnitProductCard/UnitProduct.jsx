/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { productImg } from '../../../theme/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Styles } from './style/UnitProduct';

const { width } = Dimensions.get('window');

const UnitProduct = ({ navigation, imageWidth, imageHeight, showDescription, descriptionColor, gridOfTwo = true, productsData = [] }) => {

    // useEffect(() => {
    //     console.log(width);
    // }, []);
    const data = productsData;
    const { root } = data;
    // console.log(root)
    // const rootUrl = `http://${userInformation.ipAddress}/${root}`;
    // console.log(rootUrl);
    // const data = [
    //     {
    //         _id: 1,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 2,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 3,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 4,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 5,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 6,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 7,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 8,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 9,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    //     {
    //         _id: 10,
    //         proName: 'Force Renew Zip Hoodie',
    //         color: 'black',
    //         amount: 590,
    //     },
    // ];

    const [productId, setProductId] = useState('');

    // useEffect(() => {
    //     if (productId !== '') {
    //         navigation.navigate('showProductInfo', { url: `product/showVariantDetails?variantId=${productId}` });
    //     }
    // }, [productId]);

    const groupTwoProducts = (data) => {
        const grouped = [];
        for (let i = 0; i < data?.length; i += 2) {
            if ((i + 1) === undefined) {
                grouped.push(data.slice(i, i + 1));
            }
            else {
                grouped.push(data.slice(i, i + 2));
            }
        }
        return grouped;
    };

    const groupFourProducts = (data) => {
        const grouped = [];
        for (let i = 0; i < data?.length; i += 4) {
            if ((i + 1) === undefined) {
                grouped.push(data.slice(i, i + 1));
            }
            else {
                grouped.push(data.slice(i, i + 4));
            }
        }
        return grouped;
    };


    const groupedData = gridOfTwo ? groupTwoProducts(data?.data) : groupFourProducts(data?.data);

    const renderRow = ({ item }) => (
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: gridOfTwo ? 'space-between' : 'flex-start', marginBottom: gridOfTwo ? 0 : 12, gap: 7 }} >
            {item.map((product) => (
                <TouchableOpacity
                    activeOpacity={0.75}
                    key={product._id}
                    onPress={() => navigation.navigate('showProductInfo', { url: `product/showVariantDetails?variantId=${product._id}` })}
                >
                    <View style={{ flexDirection: 'column', gap: 4 }} >
                        <View key={product._id} style={{ ...Styles.CardImageContainer, borderWidth: 0.6, padding: 1, borderRadius: 12, borderColor: `${product.color}` }}>
                            <View style={{ width: '100%', overflow: 'hidden' }}>
                                <Image source={{ uri: `${root}/${product?.colorImage}` }} style={{ ...Styles.CardImage, width: imageWidth || 100, height: imageHeight || 140 }} resizeMode="cover" />
                            </View>
                            <TouchableOpacity>
                                <Icon name="add-outline" size={gridOfTwo ? 25 : 20} color="#fff" style={{ ...Styles.addItemIcon, bottom: 5, right: 9 }} />
                                <Icon name="add-outline" color={'#fff'} style={Styles.addItemIcon} size={gridOfTwo ? 25 : 20} />
                            </TouchableOpacity>
                        </View>
                        {
                            showDescription &&
                            <View style={{ ...Styles.descriptionContainer, paddingHorizontal: 8 }} >
                                <Text style={{ color: descriptionColor || '#fff', fontSize: 11.5, fontWeight: '700' }}>{product.title}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: descriptionColor || '#fff', fontSize: 10.5, fontWeight: '400' }}>{product.color}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: -4 }}>
                                    <MaterialIcon name="currency-rupee" size={15} color={descriptionColor || '#fff'} />
                                    <Text style={{ color: descriptionColor || '#fff', fontSize: 10.5, fontWeight: '700' }}>{product.sale_price}</Text>
                                </View>
                            </View>
                        }
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <>
            {data.length !== 0 ?
                <FlatList
                    data={groupedData}
                    renderItem={renderRow}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={false}
                /> :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>No Products Available</Text>
                </View>
            }
        </>
    );
};

export default UnitProduct;

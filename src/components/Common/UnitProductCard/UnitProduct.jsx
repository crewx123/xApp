import React from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { productImg } from '../../../theme/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Styles } from './style/UnitProduct';

const { width } = Dimensions.get('window');

const UnitProduct = ({ imageWidth, imageHeight, showDescription, descriptionColor, gridOfTwo = true }) => {

    useEffect(() => {
        console.log(width);
    }, [])
    const data = [
        {
            _id: 1,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 2,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 3,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 4,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 5,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 6,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 7,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 8,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 9,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
        {
            _id: 10,
            proName: 'Force Renew Zip Hoodie',
            color: 'black',
            amount: 590,
        },
    ];

    const groupTwoProducts = (data) => {
        const grouped = [];
        for (let i = 0; i < data.length; i += 2) {
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
        for (let i = 0; i < data.length; i += 4) {
            if ((i + 1) === undefined) {
                grouped.push(data.slice(i, i + 1));
            }
            else {
                grouped.push(data.slice(i, i + 4));
            }
        }
        return grouped;
    };



    const groupedData = gridOfTwo ? groupTwoProducts(data) : groupFourProducts(data);

    const renderRow = ({ item }) => (
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: gridOfTwo ? 'space-between' : 'flex-start', marginBottom: gridOfTwo ? 0 : 12, gap: 7 }} >
            {item.map((product) => (
                <View style={{ flexDirection: 'column', gap: 4 }} key={product._id}>
                    <View key={product._id} style={Styles.CardImageContainer}>
                        <View style={{ width: '100%', overflow: 'hidden' }}>
                            <Image source={productImg} style={{ ...Styles.CardImage, width: imageWidth || 100, height: imageHeight || 140 }} resizeMode='cover' />
                        </View>
                        <TouchableOpacity>
                            <Icon name="add-outline" size={gridOfTwo ? 25 : 20} color="#fff" style={{ ...Styles.addItemIcon, bottom: 5, right: 9 }} />
                            <Icon name='add-outline' color={'#fff'} style={Styles.addItemIcon} size={gridOfTwo ? 25 : 20} />
                        </TouchableOpacity>
                    </View>
                    {
                        showDescription &&
                        <View style={Styles.descriptionContainer} >
                            <Text style={{ color: descriptionColor || '#fff', fontSize: 11.5, fontWeight: '700' }}>{product.proName}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: descriptionColor || '#fff', fontSize: 10.5, fontWeight: '400' }}>{product.color}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: -4 }}>
                                <MaterialIcon name="currency-rupee" size={15} color={descriptionColor || "#fff"} />
                                <Text style={{ color: descriptionColor || '#fff', fontSize: 10.5, fontWeight: '700' }}>{product.amount}</Text>
                            </View>
                        </View>
                    }
                </View>
            ))}
        </View>
    );

    return (
        <FlatList
            data={groupedData}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
        />
    )
}

export default UnitProduct;
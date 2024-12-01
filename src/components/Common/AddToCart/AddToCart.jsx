import React from 'react';
import { useState } from 'react';
import AddToCartModal from '../../Modal/Modal';
import { productImg } from '../../../theme/Images';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import { Styles } from './style/AddToCart';


const AddToCart = ({ isDrawerVisible, setIsDrawerVisible }) => {

    const [cartItemsCounts, setCartItemsCount] = useState(1);

    const increaseCartItemValue = () => {
        setCartItemsCount((prev) => prev + 1);
    }

    const decreaseCartItemValue = () => {
        if (cartItemsCounts > 1)
            setCartItemsCount((prev) => prev - 1);
    }


    return (
        <AddToCartModal
            isDrawerVisible={isDrawerVisible}
            setIsDrawerVisible={setIsDrawerVisible}
        >
            <View style={{ flex: 1, position: 'relative' }}>
                <View style={Styles.cartHeadingContainer}>
                    <Text style={Styles.headingName}>Your Choices</Text>
                </View>
                <View style={Styles.cartContainer}>
                    <View>
                        <View style={Styles.cartItemsContainer}>
                            <View>
                                <Image source={productImg} style={Styles.productImage} resizeMode='cover' />
                            </View>
                            <View style={Styles.productInfoContainer}>
                                <Text style={Styles.commonText}>Polo Party Wear</Text>
                                <View style={Styles.colorAndSizeContainer}>
                                    <Text style={Styles.commonText}>Black</Text>
                                    <OctIcon name='dot-fill' size={9} color='#fff' />
                                    <Text style={Styles.commonText}>XXL</Text>
                                </View>
                                <View style={Styles.priceContainer}>
                                    <MaterialIcon name="currency-rupee" size={12} color="#fff" />
                                    <Text style={Styles.commonText}>500 X {cartItemsCounts}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-end', justifyContent: '', gap: 5 }}>
                            <TouchableOpacity>
                                <MaterialIcon name='delete' size={20} color='red' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcon name='store-edit' size={20} color='#fff' />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 80, height: 'auto', borderWidth: 0.3, borderColor: 'grey', borderRadius: 50, paddingHorizontal: 12, paddingVertical: 3 }}>
                                <TouchableOpacity onPress={decreaseCartItemValue}>
                                    <Text style={{ ...Styles.commonText, fontSize: 18 }}>-</Text>
                                </TouchableOpacity>
                                <Text style={Styles.commonText}>{cartItemsCounts}</Text>
                                <TouchableOpacity onPress={increaseCartItemValue}>
                                    <Text style={{ ...Styles.commonText, fontSize: 18 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={Styles.checkOutDetailsContainer}>
                    <View style={Styles.shippingTypeContainer}>
                        <Text style={{ ...Styles.commonText, textAlign: 'center' }}>Free Shipping</Text>
                    </View>
                    <View style={Styles.totalPaymentContainer}>
                        <Text style={Styles.commonText}>Total</Text>
                        <View style={Styles.priceContainer}>
                            <MaterialIcon name="currency-rupee" size={12} color="#fff" />
                            <Text style={Styles.commonText}>1000</Text>
                        </View>
                    </View>
                    <View style={Styles.checkOutBtnContainer}>
                        <TouchableOpacity style={{ width: '85%', paddingVertical: 12, borderWidth: 0.3, backgroundColor: '#00FF9F', borderRadius: 50 }} >
                            <Text style={{ ...Styles.commonText, fontSize: 17.5, color: '#fff', textAlign: 'center' }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </AddToCartModal>
    )
}

export default AddToCart;
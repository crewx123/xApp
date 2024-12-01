import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Styles } from './style/SearchStyle';
import BottomDrawer from '../../components/Modal/Modal';
import UnitProduct from '../Common/UnitProductCard/UnitProduct';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SearchBarMenu = ({ isDrawerVisible, setIsDrawerVisible }) => {
    const [searchedName, setSearchName] = useState('');
    return (
        <BottomDrawer
            isDrawerVisible={isDrawerVisible}
            setIsDrawerVisible={setIsDrawerVisible}
        >
            <View style={Styles.productSearchContainer}>
                <TextInput
                    style={Styles.productSearchBar}
                    placeholder='Search Products...'
                    value={searchedName}
                    onChangeText={setSearchName}
                    placeholderTextColor='#fff'
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={true}
                    keyboardShouldPersistTaps="handled"
                    nestedScrollEnabled={true}
                >
                    <View style={Styles.searchedTextContainer}>
                        <View style={Styles.searchContainer}>
                            <Text style={{ ...Styles.searchedText, color: '#fff', fontSize: 13, letterSpacing: 2, fontWeight: '700' }}>POPULAR SEARCHES</Text>
                            <View style={{ paddingTop: 5, gap: 5 }}>
                                <TouchableOpacity>
                                    <Text style={Styles.searchedText}>Polo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={Styles.searchedText}>V-Neck</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={Styles.searchedText}>Plain</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={Styles.searchedText}>Polo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={Styles.searchContainer}>
                            <Text style={{ ...Styles.searchedText, color: '#fff', fontSize: 13, letterSpacing: 2, fontWeight: '700' }}>RECENT SEARCHES</Text>
                            <View style={{ paddingTop: 5, gap: 5 }}>
                                <TouchableOpacity>
                                    <Text style={Styles.searchedText}>Polo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.productHeadingContainer}>
                        <Text style={{ ...Styles.searchedText, color: '#fff', fontSize: 13, letterSpacing: 2, fontWeight: '700' }}>TRENDING PRODUCTS</Text>
                    </View>
                    <UnitProduct
                        imageWidth={width / 2.32}
                        imageHeight={232}
                        showDescription={true}
                    />
                </ScrollView>
            </View>
        </BottomDrawer>
    )
}

export default SearchBarMenu;